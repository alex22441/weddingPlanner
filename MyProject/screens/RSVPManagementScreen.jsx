import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import MyComponent from '../components/MyComponent';

const RSVPManagementScreen = ({ route }) => {
  // Extract guest data from the route params
  const { guest } = route.params;
  const [rsvpStatus, setRsvpStatus] = useState(guest.rsvp);

  const handleRSVP = (response) => {
    // Update the RSVP status locally
    setRsvpStatus(response);
    // Send the updated RSVP status to the backend or database
    // Example: Call an API to update the RSVP status
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>RSVP Management</Text>
      <Text>Name: {guest.name}</Text>
      <Text>Family Name: {guest.familyName}</Text>
      <Text>RSVP Status: {rsvpStatus}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Attending" onPress={() => handleRSVP('Attending')} />
        <Button title="Not Attending" onPress={() => handleRSVP('Not Attending')} />
      </View>
    </View>
  );
};

export default RSVPManagementScreen;