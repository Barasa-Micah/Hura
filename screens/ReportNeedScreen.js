import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const ReportNeedScreen = ({ navigation }) => {
  const navigateToPartners = () => {
    navigation.navigate('Partners');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Report Urgent Resource Needs</Text>
      <Text style={styles.description}>
        Communities can use this page to report urgent needs for resources. Help us understand what is most needed in affected areas.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resource Needs</Text>
        <Text style={styles.cardText}>Submit a report outlining the critical needs in your area. This helps improve resource distribution and prioritization.</Text>
      </View>
      <Button
        title="View Partners"
        onPress={navigateToPartners}
        color="#673ab7"
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

export default ReportNeedScreen;
