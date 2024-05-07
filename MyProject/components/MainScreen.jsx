import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

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
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Wedding Planner App</Text>
        {/* Additional footer content can be added here */}
      </View>
    </View>
  );
};

export default MainScreen;
