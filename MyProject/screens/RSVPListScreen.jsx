import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RSVPListScreen = () => {
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

      {/* Footer */}
      {/* Optional footer section can be added here */}
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
});

export default RSVPListScreen;
