import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="shield-checkmark-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Privacy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support & About</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="help-circle-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="document-text-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Terms and Policies</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="warning-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Report a problem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="person-add-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Add account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="log-out-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.itemText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 15,
  },
});

export default SettingsScreen;