import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Wedding Planner App</Text>
        {/* Additional header elements can be added here */}
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Navigation Buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RSVPList')}
        >
          <Text style={styles.buttonText}>RSVP List</Text>
        </TouchableOpacity>
        {/* Add more navigation buttons for other sections */}
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
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MainScreen;