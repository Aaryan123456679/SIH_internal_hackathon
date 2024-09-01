import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

const invoiceData = [
  { date: '07/09/2022, 06:31', type: 'Invoiced', sendAmount: '$1,800', fee: '$2.00', receiveAmount: '$1,798', status: 'Pending' },
  { date: '06/09/2022, 22:02', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
  { date: '06/09/2022, 17:54', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
  { date: '06/09/2022, 17:54', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
  { date: '06/09/2022, 14:12', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
  { date: '05/09/2022, 17:54', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
  { date: '04/09/2022, 12:54', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
  { date: '03/09/2022, 00:38', type: 'Invoiced', sendAmount: '$300', fee: '$0.40', receiveAmount: '$299.60', status: 'Complete' },
];

const InvoiceHistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Payments</Text>
          <Text style={styles.summaryValue}>$4,500</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Requests</Text>
          <Text style={styles.summaryValue}>$1,200</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Subscriptions</Text>
          <Text style={styles.summaryValue}>$4,500</Text>
        </View>
      </View>

      {/* Transaction Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Invoice date</Text>
          <Text style={styles.tableHeaderText}>Type</Text>
          <Text style={styles.tableHeaderText}>Send amount</Text>
          <Text style={styles.tableHeaderText}>Fee</Text>
          <Text style={styles.tableHeaderText}>Receive amount</Text>
          <Text style={styles.tableHeaderText}>Status</Text>
        </View>

        <FlatList
          data={invoiceData}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.date}</Text>
              <Text style={styles.tableCell}>{item.type}</Text>
              <Text style={styles.tableCell}>{item.sendAmount}</Text>
              <Text style={styles.tableCell}>{item.fee}</Text>
              <Text style={styles.tableCell}>{item.receiveAmount}</Text>
              <Text style={[styles.tableCell, styles[item.status.toLowerCase()]]}>{item.status}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryItem: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#888',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  tableContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  pending: {
    color: '#ff9800',
  },
  complete: {
    color: '#4caf50',
  },
});

export default InvoiceHistoryScreen;
