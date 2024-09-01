import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const InvoiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Invoice Header */}
      <View style={styles.header}>
        <Text style={styles.invoiceNumber}>[Invoice Number]</Text>
        <View style={styles.headerRow}>
          <View style={styles.headerColumn}>
            <Text style={styles.headerLabel}>Issued</Text>
            <Text style={styles.headerValue}>[Issue Date]</Text>
          </View>
          <View style={styles.headerColumn}>
            <Text style={styles.headerLabel}>Due</Text>
            <Text style={styles.headerValue}>[Due Date]</Text>
          </View>
        </View>
        <View style={styles.headerRow}>
          <View style={styles.headerColumn}>
            <Text style={styles.headerLabel}>Billed to</Text>
            <Text style={styles.headerValue}>[Company Name]</Text>
            <Text style={styles.headerValue}>[Company Address]</Text>
            <Text style={styles.headerValue}>[City, Country - Zip]</Text>
            <Text style={styles.headerValue}>[Phone Number]</Text>
          </View>
          <View style={styles.headerColumn}>
            <Text style={styles.headerLabel}>From</Text>
            <Text style={styles.headerValue}>[Your Name]</Text>
            <Text style={styles.headerValue}>[Business Address]</Text>
            <Text style={styles.headerValue}>[City, State, Zip]</Text>
            <Text style={styles.headerValue}>[TAX ID]</Text>
          </View>
        </View>
      </View>

      {/* Invoice Items */}
      <View style={styles.itemsContainer}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemHeaderText}>Service</Text>
          <Text style={styles.itemHeaderText}>Qty</Text>
          <Text style={styles.itemHeaderText}>Rate</Text>
          <Text style={styles.itemHeaderText}>Line total</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>[Service Name]</Text>
          <Text style={styles.itemText}>[Qty]</Text>
          <Text style={styles.itemText}>[Rate]</Text>
          <Text style={styles.itemText}>[Line Total]</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>[Service Name]</Text>
          <Text style={styles.itemText}>[Qty]</Text>
          <Text style={styles.itemText}>[Rate]</Text>
          <Text style={styles.itemText}>[Line Total]</Text>
        </View>
      </View>

      {/* Invoice Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>[Subtotal]</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax (%)</Text>
          <Text style={styles.summaryValue}>[Tax]</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>[Total]</Text>
        </View>
        <View style={styles.amountDue}>
          <Text style={styles.amountDueText}>Amount due</Text>
          <Text style={styles.amountDueValue}>[Amount Due]</Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        [Footer Note]
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  invoiceNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerColumn: {
    width: '48%',
  },
  headerLabel: {
    fontSize: 14,
    color: '#888',
  },
  headerValue: {
    fontSize: 16,
    color: '#333',
  },
  itemsContainer: {
    marginBottom: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
    marginBottom: 10,
  },
  itemHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#333',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amountDue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  amountDueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  amountDueValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default InvoiceScreen;
