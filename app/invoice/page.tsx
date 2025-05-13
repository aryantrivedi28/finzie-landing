"use client";

import { useState } from 'react';

export default function InvoiceGenerator() {
  type Message = { role: 'user' | 'ai'; content: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [invoiceData, setInvoiceData] = useState<any>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const res = await fetch('/api/parse-invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    const aiMessage: Message = { role: 'ai', content: data.result };
    setMessages([...newMessages, aiMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#201911] text-white px-6 py-4 text-xl font-semibold">
        AI Invoice Assistant
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] px-4 py-2 rounded-md text-sm whitespace-pre-wrap ${
              msg.role === 'user'
                ? 'bg-yellow-400 text-black self-start'
                : 'bg-[#201911] text-white self-end ml-auto'
            }`}
          >
            {(() => {
              if (msg.role === 'ai') {
                try {
                  const parsed = JSON.parse(msg.content);
                  return (
                    <div className="bg-[#201911] text-white p-4 rounded-md space-y-2 text-sm">
                      <div><strong>Client:</strong> {parsed.client_name}</div>
                      <div><strong>Items:</strong> {parsed.items?.map((item: any, idx: number) => (
                        <div key={idx}>{item.quantity}x {item.description} - ₹{item.unit_price} each</div>
                      ))}</div>
                      <div><strong>Total:</strong> ₹{parsed.total}</div>
                      <div><strong>Due Date:</strong> {parsed.due_date}</div>
                      <div className="mt-4 flex gap-2">
                        <button
                          className="bg-yellow-400 px-3 py-1 text-black text-sm rounded"
                          onClick={() => {
                            setInvoiceData(parsed);
                            setShowModal(true);
                          }}
                        >
                          Preview PDF
                        </button>
                      </div>
                    </div>
                  );
                } catch (err) {
                  return <pre className="whitespace-pre-wrap text-white">{msg.content}</pre>;
                }
              }
              return <div>{msg.content}</div>;
            })()}
          </div>
        ))}
      </div>

      <div className="border-t px-4 py-3 flex items-center bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type something like: create invoice for Aryan, 10 posts ₹5000, 5 videos ₹10000, due May 20"
          className="flex-1 border rounded px-3 py-2 mr-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-[#201911] text-white px-4 py-2 text-sm rounded"
        >
          Send
        </button>
      </div>

      {showModal && invoiceData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-[540px] space-y-6">
            {/* Only this part will be converted to PDF */}
            <div id="invoice-preview" className="p-6">
              <div className="text-center">
                <h1 className="text-xl font-bold">INVOICE</h1>
                <p className="text-sm text-gray-600">{invoiceData.sender_name || 'Your Company'}</p>
                <p className="text-sm text-gray-600">{invoiceData.sender_email || 'email@example.com'}</p>
              </div>

              <div className="flex justify-between text-sm mt-4">
                <div>
                  <p><strong>Bill To:</strong></p>
                  <p>{invoiceData.client_name}</p>
                </div>
                <div className="text-right">
                  <p><strong>Invoice Date:</strong> {new Date().toISOString().slice(0, 10)}</p>
                  <p><strong>Due Date:</strong> {invoiceData.due_date}</p>
                </div>
              </div>

              <table className="w-full text-sm border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-2 border-r">Description</th>
                    <th className="p-2 border-r">Qty</th>
                    <th className="p-2 border-r">Price</th>
                    <th className="p-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items?.map((item: any, idx: number) => (
                    <tr key={idx}>
                      <td className="p-2 border-t border-r">{item.description}</td>
                      <td className="p-2 border-t border-r">{item.quantity}</td>
                      <td className="p-2 border-t border-r">₹{item.unit_price}</td>
                      <td className="p-2 border-t text-right">₹{item.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-right font-bold text-sm mt-2">
                Total: ₹{invoiceData.total}
              </div>

              <div className="text-xs text-gray-500 border-t pt-2 mt-2">
                <p>Bank: {invoiceData.bank_name}</p>
                <p>Account No: {invoiceData.account_number} · IFSC: {invoiceData.ifsc}</p>
                <p>UPI: {invoiceData.upi}</p>
              </div>

              <div className="text-xs text-gray-500 border-t pt-2 italic mt-2">
                <p>{invoiceData.notes || 'Thank you for your business!'}</p>
              </div>
            </div>

            {/* Action Buttons (excluded from PDF) */}
            <div className="flex justify-end mt-6 gap-2">
              <button onClick={() => setShowModal(false)} className="px-3 py-1 border rounded">
                Cancel
              </button>
              <button
                className="bg-black text-white px-3 py-1 rounded"
                onClick={async () => {
                  const html2pdf = (await import('html2pdf.js')).default;
                  const element = document.getElementById('invoice-preview');
                  if (element) {
                    html2pdf().from(element).save(`Invoice-${invoiceData.client_name}.pdf`);
                  }
                }}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
