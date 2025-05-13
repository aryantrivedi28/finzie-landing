// components/InvoicePDF.tsx
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
  } from '@react-pdf/renderer';
  
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 11,
      fontFamily: 'Helvetica',
    },
    section: { marginBottom: 10 },
    heading: { fontSize: 20, marginBottom: 10 },
    bold: { fontWeight: 'bold' },
    tableHeader: {
      flexDirection: 'row',
      borderBottom: '1px solid #000',
      marginBottom: 4,
    },
    row: { flexDirection: 'row', marginBottom: 2 },
    col1: { flex: 4 },
    col2: { flex: 1, textAlign: 'right' },
  });
  
  export default function InvoicePDF({ invoiceData }: { invoiceData: any }) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>INVOICE</Text>
            <Text>{invoiceData?.sender_name}</Text>
            <Text>{invoiceData?.sender_email}</Text>
          </View>
  
          <View style={styles.section}>
            <Text>Bill To: {invoiceData?.client_name}</Text>
            <Text>Due Date: {invoiceData?.due_date}</Text>
          </View>
  
          <View style={styles.section}>
            <View style={styles.tableHeader}>
              <Text style={styles.col1}>Description</Text>
              <Text style={styles.col2}>Amount</Text>
            </View>
            {invoiceData?.items?.map((item: any, i: number) => (
              <View key={i} style={styles.row}>
                <Text style={styles.col1}>
                  {item.quantity}x {item.description} @ ₹{item.unit_price}
                </Text>
                <Text style={styles.col2}>₹{item.subtotal}</Text>
              </View>
            ))}
          </View>
  
          <View style={styles.section}>
            <Text>Total: ₹{invoiceData?.total}</Text>
          </View>
  
          <View style={styles.section}>
            <Text>Bank: {invoiceData?.bank_name}</Text>
            <Text>Account No: {invoiceData?.account_number}</Text>
            <Text>IFSC: {invoiceData?.ifsc}</Text>
            <Text>UPI: {invoiceData?.upi}</Text>
          </View>
  
          <View style={styles.section}>
            <Text>{invoiceData?.notes || 'Thank you for your business!'}</Text>
          </View>
        </Page>
      </Document>
    );
  }
  