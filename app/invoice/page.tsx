"use client";

import { useRef, useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const res = await fetch('/api/parse-invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();

    setMessages([...newMessages, { role: 'ai', content: data.result }]);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-[#201911] text-white px-6 py-4 text-xl font-semibold">
        AI Invoice Assistant
      </header>

      {/* Chat Area */}
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
                      <div><strong>Description:</strong> {parsed.description}</div>
                      <div><strong>Amount:</strong> ₹{parsed.amount}</div>
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

      {/* Input Bar */}
      <div className="border-t px-4 py-3 flex items-center bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2 mr-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-[#201911] text-white px-4 py-2 text-sm rounded"
        >
          Send
        </button>
      </div>

      {/* PDF Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-[420px] space-y-6" ref={previewRef}>
            {/* Header */}
            <div className="text-center">
              <h1 className="text-xl font-bold">INVOICE</h1>
              <p className="text-sm text-gray-600">Aryan Trivedi · Finzie</p>
              <p className="text-sm text-gray-600">aryan@getfinzie.com</p>
            </div>

            {/* Invoice Meta */}
            <div className="flex justify-between text-sm">
              <div>
                <p><strong>Bill To:</strong></p>
                <p>{invoiceData?.client_name}</p>
              </div>
              <div>
                <p><strong>Invoice Date:</strong> {new Date().toISOString().slice(0, 10)}</p>
                <p><strong>Due Date:</strong> {invoiceData?.due_date}</p>
              </div>
            </div>

            {/* Service Description */}
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2 border-r border-gray-300">Description</th>
                  <th className="p-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-t border-r border-gray-300">{invoiceData?.description}</td>
                  <td className="p-2 border-t text-right">₹{invoiceData?.amount}</td>
                </tr>
              </tbody>
            </table>

            {/* Total */}
            <div className="text-right">
              <p className="text-base font-bold">Total: ₹{invoiceData?.amount}</p>
            </div>

            {/* Footer */}
            <div className="text-xs text-gray-500 border-t pt-2">
              <p>Thank you for your business!</p>
              <p>For any queries, contact aryan@getfinzie.com</p>
            </div>

            {/* Modal Buttons */}
            <div className="flex justify-end mt-6 gap-2">
              <button onClick={() => setShowModal(false)} className="px-3 py-1 border rounded">
                Cancel
              </button>
              <button
                className="bg-black text-white px-3 py-1 rounded"
                onClick={() => {
                  import('html2pdf.js').then(({ default: html2pdf }) => {
                    html2pdf().from(previewRef.current).save();
                  });
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
