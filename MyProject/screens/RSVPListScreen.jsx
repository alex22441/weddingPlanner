import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';

const RSVPListScreen = () => {
  const [isAddGuestModalVisible, setIsAddGuestModalVisible] = useState(false);
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

  const openAddGuestModal = () => {
    setIsAddGuestModalVisible(true);
  };

  const closeAddGuestModal = () => {
    setIsAddGuestModalVisible(false);
  };

  const handleInputChange = (key, value) => {
    setGuestData({
      ...guestData,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>RSVP List</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* List of Guests (to be implemented) */}
        <Text>No guests yet</Text>
      </View>

      {/* Button to Add Guest */}
      <Button title="Add Guest" onPress={openAddGuestModal} />

      {/* Add Guest Modal */}
      <Modal visible={isAddGuestModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text>Add Guest</Text>
          {/* Input fields for guest details */}
          <TextInput
            style={styles.input}
            placeholder="Invited on behalf"
            value={guestData.Relation}
            onChangeText={(text) => handleInputChange('Relation', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Family Name"
            value={guestData.FamilyName}
            onChangeText={(text) => handleInputChange('FamilyName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={guestData.FirstName}
            onChangeText={(text) => handleInputChange('FirstName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="No. atendees"
            value={guestData.NoOfInvitation}
            onChangeText={(text) => handleInputChange('NoOfInvitation', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="RSVP"
            value={guestData.RSVP}
            onChangeText={(text) => handleInputChange('RSVP', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Invitation Date"
            value={guestData.InvitationDate}
            onChangeText={(text) => handleInputChange('InvitationDate', text)}
          />
          {/* Add input fields for other guest details */}
          {/* Add submit button */}
          <Button title="Submit" onPress={closeAddGuestModal} />
          <Button title="Close" onPress={closeAddGuestModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RSVPListScreen;