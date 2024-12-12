import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const PartnersScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Partner Organizations</Text>
      <Text style={styles.description}>
        These are the organizations that are actively involved in disaster response. Thank you for your support and commitment!
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Organization 1</Text>
        <Text style={styles.cardText}>Description of what the organization does.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Organization 2</Text>
        <Text style={styles.cardText}>Description of what the organization does.</Text>
      </View>
      <Button
        title="Back to Predict Resources"
        onPress={() => navigation.navigate('PredictResources')}
        color="#d32f2f"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3f3f3',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#673ab7',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
});

export default PartnersScreen;
