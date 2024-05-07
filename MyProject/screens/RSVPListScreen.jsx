// RSVPListScreen.jsx
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import Table from './Table';
import styles from '../styles/styles';
import AddGuestScreen from './AddGuestScreen'; // Import AddGuestScreen

const RSVPListScreen = () => {
  const [isAddGuestModalVisible, setIsAddGuestModalVisible] = useState(false);
  const [guests, setGuests] = useState([]);

  const openAddGuestModal = () => {
    setIsAddGuestModalVisible(true);
  };

  const closeAddGuestModal = () => {
    setIsAddGuestModalVisible(false);
  };

  const handleAddGuest = (guestData) => {
    setGuests([...guests, guestData]);
    closeAddGuestModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RSVP List</Text>
      </View>

      <View style={styles.content}>
        <Table guests={guests} />
        {guests.length === 0 && <Text>No guests yet</Text>}
      </View>

      <Button title="Add Guest" onPress={openAddGuestModal} />

      <Modal
        visible={isAddGuestModalVisible}
        animationType="slide"
        onRequestClose={closeAddGuestModal}
        transparent={true} // Render modal content over the screen
      >
        <View style={styles.modalContainer}>
          {/* Render AddGuestScreen inside the modal */}
          <AddGuestScreen onAddGuest={handleAddGuest} onCancel={closeAddGuestModal} />
        </View>
      </Modal>
    </View>
  );
};

export default RSVPListScreen;
