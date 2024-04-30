import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')} // Add your background image here
      style={styles.container}
      resizeMode='cover'
    >
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover', // Adjust image resizeMode as needed
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Change header text color
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
