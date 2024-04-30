import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen'; // Update the path as needed
import RSVPListScreen from './screens/RSVPListScreen'; // Update the path as needed

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
