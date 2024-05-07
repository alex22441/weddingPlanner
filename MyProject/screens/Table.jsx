import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const Table = ({ guests }) => {
  return (
    <View style={styles.tableContainer}>
      {/* Table Header */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableHeader, { width: '10%' }]}>Relation</Text>
        <Text style={[styles.tableHeader, { width: '15%' }]}>Family Name</Text>
        <Text style={[styles.tableHeader, { width: '15%' }]}>Name</Text>
        <Text style={[styles.tableHeader, { width: '10%' }]}>Invitations</Text>
        <Text style={[styles.tableHeader, { width: '10%' }]}>Priority</Text>
        <Text style={[styles.tableHeader, { width: '10%' }]}>RSVP</Text>
        <Text style={[styles.tableHeader, { width: '15%' }]}>Invitation Sent</Text>
        <Text style={[styles.tableHeader, { width: '15%' }]}>Notes</Text>
      </View>
      {/* Table Data */}
      {guests.map((guest, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '10%' }]}>{guest.relation}</Text>
          <Text style={[styles.tableCell, { width: '15%' }]}>{guest.familyName}</Text>
          <Text style={[styles.tableCell, { width: '15%' }]}>{guest.name}</Text>
          <Text style={[styles.tableCell, { width: '10%' }]}>{guest.invitations}</Text>
          <Text style={[styles.tableCell, { width: '10%' }]}>{guest.priority}</Text>
          <Text style={[styles.tableCell, { width: '10%' }]}>{guest.rsvp}</Text>
          <Text style={[styles.tableCell, { width: '15%' }]}>{guest.invitationSent}</Text>
          <Text style={[styles.tableCell, { width: '15%' }]}>{guest.notes}</Text>
        </View>
      ))}
    </View>
  );
};

export default Table;
