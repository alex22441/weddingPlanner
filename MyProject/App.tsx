import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen'; // Corrected import path
import RSVPListScreen from './screens/RSVPListScreen'; // Corrected import path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="RSVPList" component={RSVPListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
