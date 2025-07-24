import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import TrackingHistoryScreen from './TrackingHistoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="TrackingHistory" component={TrackingHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
