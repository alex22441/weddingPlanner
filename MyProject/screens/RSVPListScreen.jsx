import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput } from 'react-native';
import Table from './TableFunc'; // Import the Table component
import styles from '../styles/styles';

const RSVPListScreen = () => {
  const [isAddGuestModalVisible, setIsAddGuestModalVisible] = useState(false);
  const [guests, setGuests] = useState([]);
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

  const handleSubmit = () => {
    // Add the new guest to the list
    setGuests([...guests, guestData]);
    // Clear input fields or reset modal state if needed
    setGuestData({
      relation: '',
      familyName: '',
      name: '',
      invitations: '',
      priority: '',
      rsvp: '',
      invitationSent: '',
      notes: '',
    });
    closeAddGuestModal();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>RSVP List</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Guest List Table */}
        <Table guests={guests} />

        {/* Show message if no guests */}
        {guests.length === 0 && <Text>No guests yet</Text>}
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
            placeholder="Family Name"
            value={guestData.familyName}
            onChangeText={(text) => handleInputChange('familyName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={guestData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="RSVP Status"
            value={guestData.rsvp}
            onChangeText={(text) => handleInputChange('rsvp', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Relation"
            value={guestData.relation}
            onChangeText={(text) => handleInputChange('relation', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Priority"
            value={guestData.priority}
            onChangeText={(text) => handleInputChange('priority', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Notes"
            value={guestData.notes}
            onChangeText={(text) => handleInputChange('notes', text)}
          />
          {/* Add submit and close buttons */}
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} />
            <Button title="Close" onPress={closeAddGuestModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RSVPListScreen;
