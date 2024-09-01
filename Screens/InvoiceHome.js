import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

const InvoiceHomeScreen = () => {
  const [invoiceData, setInvoiceData] = useState({
    companyName: '[Company Name]',
    companySlogan: '[Company Slogan]',
    address: '[Street Address]\n[City, State, Zip]',
    phone: '',
    email: '',
    billTo: {
      name: '[Name]',
      company: '[Company Name]',
      address: '[Street Address]\n[City, State, Zip]',
      phone: '',
    },
    invoiceNumber: '1',
    date: new Date().toLocaleDateString(),
    items: [],
  });

  const [menuVisible, setMenuVisible] = useState(false);

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', amount: 0 }],
    }));
  };

  const updateItem = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index][field] = value;
    setInvoiceData(prev => ({ ...prev, items: newItems }));
  };

  const totalAmount = invoiceData.items.reduce((sum, item) => sum + Number(item.amount), 0);

  const handleMenuOption = (option) => {
    setMenuVisible(false);
    // Handle menu option actions here
    switch(option) {
      case 'save':
        console.log('Save option selected');
        // Add save logic here
        break;
      case 'saveAs':
        console.log('Save As option selected');
        // Add save as logic here
        break;
      case 'print':
        console.log('Print option selected');
        // Add print logic here
        break;
      case 'email':
        console.log('Email option selected');
        // Add email logic here
        break;
      default:
        console.log('Unknown option');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Invoice Suite</Text>
        <View style={styles.navbarIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={24} color="white" />
            <Text style={styles.iconText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="document-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cloud-download-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="add-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Editing : default</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.invoiceContainer}>
          <View style={styles.companyInfo}>
            <TextInput
              style={styles.companyName}
              value={invoiceData.companyName}
              onChangeText={(text) => setInvoiceData(prev => ({ ...prev, companyName: text }))}
            />
            <TextInput
              style={styles.companySlogan}
              value={invoiceData.companySlogan}
              onChangeText={(text) => setInvoiceData(prev => ({ ...prev, companySlogan: text }))}
            />
            <TextInput
              style={styles.address}
              multiline
              value={invoiceData.address}
              onChangeText={(text) => setInvoiceData(prev => ({ ...prev, address: text }))}
            />
            <TextInput
              style={styles.contactInfo}
              placeholder="Phone:"
              value={invoiceData.phone}
              onChangeText={(text) => setInvoiceData(prev => ({ ...prev, phone: text }))}
            />
            <TextInput
              style={styles.contactInfo}
              placeholder="Email:"
              value={invoiceData.email}
              onChangeText={(text) => setInvoiceData(prev => ({ ...prev, email: text }))}
            />
          </View>

          <Text style={styles.invoiceTitle}>INVOICE</Text>

          <View style={styles.invoiceDetails}>
            <View style={styles.billTo}>
              <Text style={styles.billToTitle}>BILL TO:</Text>
              <TextInput
                style={styles.billToText}
                value={invoiceData.billTo.name}
                onChangeText={(text) => setInvoiceData(prev => ({ ...prev, billTo: { ...prev.billTo, name: text } }))}
              />
              <TextInput
                style={styles.billToText}
                value={invoiceData.billTo.company}
                onChangeText={(text) => setInvoiceData(prev => ({ ...prev, billTo: { ...prev.billTo, company: text } }))}
              />
              <TextInput
                style={styles.billToText}
                multiline
                value={invoiceData.billTo.address}
                onChangeText={(text) => setInvoiceData(prev => ({ ...prev, billTo: { ...prev.billTo, address: text } }))}
              />
              <TextInput
                style={styles.billToText}
                placeholder="Phone:"
                value={invoiceData.billTo.phone}
                onChangeText={(text) => setInvoiceData(prev => ({ ...prev, billTo: { ...prev.billTo, phone: text } }))}
              />
            </View>
            <View style={styles.invoiceInfo}>
              <Text>DATE : {invoiceData.date}</Text>
              <Text>INVOICE # : {invoiceData.invoiceNumber}</Text>
            </View>
          </View>

          <View style={styles.itemsTable}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, styles.descriptionColumn]}>DESCRIPTION</Text>
              <Text style={[styles.tableHeaderText, styles.amountColumn]}>AMOUNT</Text>
            </View>
            {invoiceData.items.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <TextInput
                  style={[styles.tableCell, styles.descriptionColumn]}
                  value={item.description}
                  onChangeText={(text) => updateItem(index, 'description', text)}
                />
                <TextInput
                  style={[styles.tableCell, styles.amountColumn]}
                  value={item.amount.toString()}
                  onChangeText={(text) => updateItem(index, 'amount', text)}
                  keyboardType="numeric"
                />
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
            <Text style={styles.addItemButtonText}>+ Add Item</Text>
          </TouchableOpacity>

          <View style={styles.totalSection}>
            <Text style={styles.totalText}>Subtotal</Text>
            <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
          </View>

          <View style={styles.notesSection}>
            <Text style={styles.notesTitle}>NOTES</Text>
            <TextInput
              style={styles.notesInput}
              multiline
              placeholder="Add notes here..."
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setMenuVisible(true)}
      >
        <Ionicons name="menu-outline" size={24} color="white" />
      </TouchableOpacity>

      {/* Menu Modal */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuOption('save')}>
            <Text style={styles.menuText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuOption('saveAs')}>
            <Text style={styles.menuText}>Save As</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuOption('print')}>
            <Text style={styles.menuText}>Print</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuOption('email')}>
            <Text style={styles.menuText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuCloseButton} onPress={() => setMenuVisible(false)}>
            <Text style={styles.menuCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  navbar: {
    backgroundColor: '#4a69bd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navbarIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    alignItems: 'center',
    marginLeft: 15,
  },
  iconText: {
    color: 'white',
    fontSize: 10,
  },
  subHeader: {
    backgroundColor: '#60a3bc',
    padding: 10,
  },
  subHeaderText: {
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  invoiceContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 5,
  },
  companyInfo: {
    marginBottom: 20,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companySlogan: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  address: {
    marginBottom: 5,
  },
  contactInfo: {
    marginBottom: 2,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  invoiceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  billTo: {
    flex: 1,
  },
  billToTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  billToText: {
    marginBottom: 2,
  },
  invoiceInfo: {
    alignItems: 'flex-end',
  },
  itemsTable: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    padding: 10,
  },
  descriptionColumn: {
    flex: 2,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  amountColumn: {
    flex: 1,
  },
  addItemButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButtonText: {
    color: '#4a69bd',
    fontWeight: 'bold',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  totalText: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  totalAmount: {
    fontWeight: 'bold',
  },
  notesSection: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
  },
  notesTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notesInput: {
    height: 80,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#4a69bd',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menuItem: {
    backgroundColor: 'white',
    padding: 15,
    width: '80%',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
  },
  menuCloseButton: {
    marginTop: 20,
    backgroundColor: '#4a69bd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  menuCloseText: {
    color: 'white',
    fontSize: 16,
  },
});

export default InvoiceHomeScreen;
