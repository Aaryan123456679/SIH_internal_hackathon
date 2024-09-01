import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import the image from the assets folder
import InvoiceImage from '../assets/image.png'; // Adjust the path if needed
import LogoImage from '../assets/logo_main.png';

export default function HomeScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // Implement login logic here
    setIsLoggedIn(true);
    navigation.navigate('SignIn')
  };

  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
      <View style={styles.logoContainer}>
          <Image
            source={LogoImage}
            style={styles.logo}
          />
        </View>
        <Text style={styles.userId}>{isLoggedIn ? "UserID" : "Guest"}</Text>
        <View style={styles.headerIcons}>
          {isLoggedIn ? (
            <>
              
              <TouchableOpacity onPress={() => navigation.navigate('CreateBill')}>
                <Ionicons name="download-outline" size={24} color="#333" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Ionicons name="add-circle-outline" size={24} color="#333" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="settings-outline" size={24} color="#333" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={24} color="#333" style={styles.icon} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              <Ionicons name="log-in-outline" size={24} color="#FFF" style={styles.loginIcon} />
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={InvoiceImage}
            style={styles.image}
          />
        </View>

        <Text style={styles.contentText}>Manage your invoices seamlessly with our intuitive tools.</Text>

        {/* Enhanced Section with Icons and Text */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="create-outline" size={30} color="#4CAF50" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Make an Invoice</Text>
              <Text style={styles.featureDescription}>Choose from over 100 templates and many different logos</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="mail-outline" size={30} color="#2196F3" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Email It</Text>
              <Text style={styles.featureDescription}>Quickly save as a PDF and email your documents to your clients</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="card-outline" size={30} color="#FF9800" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Get Paid</Text>
              <Text style={styles.featureDescription}>Get paid quickly and easily by card or by PayPal</Text>
            </View>
          </View>
        </View>

        {/* Existing buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MakeAnInvoice')}
        >
          <Text style={styles.buttonText}>Make an Invoice</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('History')}
        >
          <Text style={styles.buttonText}>Invoice History</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  userId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  loginIcon: {
    marginRight: 5,
  },
  loginText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  contentText: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 18,
    color: '#333',
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  featuresContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});