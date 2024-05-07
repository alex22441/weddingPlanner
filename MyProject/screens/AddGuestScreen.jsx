// AddGuestScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddGuestScreen = ({ navigation, onAddGuest }) => {
  const [guestData, setGuestData] = useState({
    relation: '',
    familyName: '',
    name: '',
    invitations: '',
    priority: '',
    rsvp: '',
    invitationSent: '',
    notes: '',
  });

  const handleInputChange = (key, value) => {
    setGuestData({
      ...guestData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    onAddGuest(guestData);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add Guest</Text>
      <TextInput
        placeholder="Relation"
        value={guestData.relation}
        onChangeText={(text) => handleInputChange('relation', text)}
      />
       <TextInput
        placeholder="Family Name"
        value={guestData.familyName}
        onChangeText={(text) => handleInputChange('familyName', text)}
      />
       <TextInput
        placeholder="Name"
        value={guestData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
       <TextInput
        placeholder="Invitations"
        value={guestData.invitations}
        onChangeText={(text) => handleInputChange('invitations', text)}
      />
       <TextInput
        placeholder="Priority"
        value={guestData.priority}
        onChangeText={(text) => handleInputChange('priority', text)}
      />
       <TextInput
        placeholder="RSVP"
        value={guestData.rsvp}
        onChangeText={(text) => handleInputChange('rsvp', text)}
      />
       <TextInput
        placeholder="Invitation Sent"
        value={guestData.invitationSent}
        onChangeText={(text) => handleInputChange('invitationSent', text)}
      />
       <TextInput
        placeholder="Notes"
        value={guestData.notes}
        onChangeText={(text) => handleInputChange('notes', text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddGuestScreen;
