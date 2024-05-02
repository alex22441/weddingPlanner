import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const Table = ({ guests }) => {
  return (
    <View style={styles.tableContainer}>
      {/* Table Header */}
      <View style={styles.tableRow}>
        <Text style={styles.tableHeader}>Family Name</Text>
        <Text style={styles.tableHeader}>Name</Text>
        <Text style={styles.tableHeader}>RSVP</Text>
      </View>
      {/* Table Data */}
      {guests.map((guest, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>{guest.familyName}</Text>
          <Text style={styles.tableCell}>{guest.name}</Text>
          <Text style={styles.tableCell}>{guest.rsvp}</Text>
        </View>
      ))}
    </View>
  );
};

export default Table;
