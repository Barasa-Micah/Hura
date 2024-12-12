import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const TrackShipmentScreen = ({ navigation }) => {
  const navigateToReportNeed = () => {
    navigation.navigate('ReportNeed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Track Shipment</Text>
      <Text style={styles.description}>
        Use this page to track the status of your shipments in real-time. Ensure resources are on the way and manage delays effectively.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Shipment Status</Text>
        <Text style={styles.cardText}>Enter your shipment ID to track the location and expected arrival time of the resources.</Text>
      </View>
      <Button
        title="Report Community Need"
        onPress={navigateToReportNeed}
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

export default TrackShipmentScreen;
