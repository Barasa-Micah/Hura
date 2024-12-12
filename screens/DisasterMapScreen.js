import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Linking } from 'react-native';

const DisasterMapScreen = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated fetch request for disaster data
  useEffect(() => {
    // Simulating an API call to fetch disaster data
    const fetchDisasters = async () => {
      setLoading(true);
      try {
        // Replace this with actual API fetch logic
        const response = await fetch('https://api.example.com/disasters');
        const data = await response.json();
        setDisasters(data);
      } catch (error) {
        console.error('Error fetching disaster data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  const handleReportNeed = () => {
    // Handle reporting a need, e.g., showing a form or navigating to another screen
    alert('Report a need for resources');
  };

  const openMap = () => {
    // Open an external map or disaster tracking site (example: Google Maps)
    const mapUrl = 'https://www.google.com/maps';  // Replace with the URL of your disaster map
    Linking.openURL(mapUrl).catch(err => console.error('Error opening map:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disaster Response Information</Text>

      {loading ? (
        <Text style={styles.loadingText}>Loading disaster data...</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          {disasters.length === 0 ? (
            <Text style={styles.noDataText}>No disaster data available.</Text>
          ) : (
            disasters.map((disaster, index) => (
              <View key={index} style={styles.disasterCard}>
                <Text style={styles.disasterTitle}>{disaster.title}</Text>
                <Text style={styles.disasterDescription}>{disaster.description}</Text>
                <Text style={styles.disasterLocation}>Location: {disaster.location}</Text>
                <Text style={styles.disasterStatus}>Status: {disaster.status}</Text>
                <Button title="Report Need" onPress={handleReportNeed} color="#800080" />
              </View>
            ))
          )}

          <View style={styles.mapSection}>
            <Text style={styles.mapText}>For more disaster information, check the map:</Text>
            <Button title="Open Disaster Map" onPress={openMap} color="#800080" />
          </View>

          {/* Additional Content */}
          <View style={styles.additionalContent}>
            <Text style={styles.infoTitle}>What is a Disaster Response?</Text>
            <Text style={styles.infoText}>
              Disaster response refers to the efforts made to provide immediate assistance and relief to people affected by disasters. 
              This includes mobilizing resources, coordinating with partners, and providing basic needs like food, shelter, and medical care.
            </Text>

            <Text style={styles.infoTitle}>How You Can Help</Text>
            <Text style={styles.infoText}>
              Your support can make a huge difference. You can donate, volunteer, or report any immediate needs in your community.
              Stay informed, stay safe, and support those in need.
            </Text>

            <Text style={styles.infoTitle}>Current Needs</Text>
            <Text style={styles.infoText}>
              - Medical Supplies for the affected areas. 
              - Volunteers to help with rescue and relief efforts. 
              - Food and water distribution to displaced families.
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#800080',  // Purple color for the theme
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#800080',
  },
  noDataText: {
    fontSize: 18,
    color: '#ff0000',  // Red color for no data
  },
  scrollView: {
    marginBottom: 20,
  },
  disasterCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  disasterTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: '#800080',  // Purple color for titles
  },
  disasterDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  disasterLocation: {
    fontSize: 16,
    color: '#333',
  },
  disasterStatus: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  mapSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    textAlign: 'center',
  },
  mapText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  additionalContent: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800080',  // Purple color for section titles
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
});

export default DisasterMapScreen;
