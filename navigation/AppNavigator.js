import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PredictResourcesScreen from '../screens/PredicteResources';  // Ensure the correct path is used
import DisasterMapScreen from '../screens/DisasterMapScreen';
import TrackShipmentScreen from '../screens/TrackShipmentScreen';
import ReportNeedScreen from '../screens/ReportNeedScreen';
import PartnersScreen from '../screens/PartnersScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="PredictResources">
    <Stack.Screen name="PredictResources" component={PredictResourcesScreen} />
    <Stack.Screen name="DisasterMap" component={DisasterMapScreen} />
    <Stack.Screen name="TrackShipment" component={TrackShipmentScreen} />
    <Stack.Screen name="ReportNeed" component={ReportNeedScreen} />
    <Stack.Screen name="Partners" component={PartnersScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
