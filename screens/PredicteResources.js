import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PredictResourcesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predict Resources Screen</Text>
      
      {/* Navigate to DisasterMap screen */}
      <Button 
        title="Go to Disaster Map" 
        onPress={() => navigation.navigate('DisasterMap')} 
      />
      
      {/* Navigate to TrackShipment screen */}
      <Button 
        title="Go to Track Shipment" 
        onPress={() => navigation.navigate('TrackShipment')} 
      />
      
      {/* Navigate to ReportNeed screen */}
      <Button 
        title="Go to Report Need" 
        onPress={() => navigation.navigate('ReportNeed')} 
      />
      
      {/* Navigate to Partners screen */}
      <Button 
        title="Go to Partners" 
        onPress={() => navigation.navigate('Partners')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default PredictResourcesScreen;
