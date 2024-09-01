import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <Image
        source={require('../assets/logo.png')} // Replace with your local image path
        style={styles.icon}
      />

      {/* App Name */}
      <Text style={styles.appName}>Invoice2Go</Text>

      {/* Get started text */}
      <Text style={styles.title}>Get started</Text>

      {/* SignUp and Login buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title="SignUp"
          onPress={() => navigation.navigate('SignUp')} // Assuming you have navigation set up
          color="#333"
        />
      </View>
      <Text style={styles.orText}>OR</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')} // Assuming you have navigation set up
          color="#333"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20, // To provide some padding on the sides
  },
  icon: {
    width: 200,  // Increased width
    height: 200, // Increased height
    marginBottom: 20, // Adjusted for spacing
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Added to match the buttons' color
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333', // Ensuring consistent color scheme
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default HomePage;
