import React from 'react';
import { View, Text } from 'react-native';

const GuestDetailsScreen = ({ route }) => {
  // Extract guest data from the route params
  const { guest } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Guest Details</Text>
      <Text>Name: {guest.name}</Text>
      <Text>Family Name: {guest.familyName}</Text>
      <Text>Relation: {guest.relation}</Text>
      {/* Add more guest details here */}
    </View>
  );
};

export default GuestDetailsScreen;