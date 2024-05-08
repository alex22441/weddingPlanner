import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import styles from '../styles/styles';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => navigation.navigate('RSVPList')}>
          <FontAwesome name="list" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('AddGuest')}>
          <FontAwesome name="child" size={24} color="black" />
        </TouchableOpacity>  
        
        <TouchableOpacity onPress={() => navigation.navigate('RSVPManagement')}>
          <FontAwesome name="desktop" size={24} color="black" />
        </TouchableOpacity>
        {/* Add more navigation buttons/icons as needed */}
      </View>

      {/* Wedding Countdown */}
      <View style={styles.countdownContainer}>
        <Text style={styles.countdownText}>Countdown to Wedding: XX Days</Text>
      </View>

      {/* Featured Content */}
      <View style={styles.featuredContent}>
        <Text style={styles.featuredHeading}>Latest Updates</Text>
        {/* Add featured content here */}
      </View>

      {/* RSVP Button */}
      <TouchableOpacity
        style={styles.rsvpButton}
        onPress={() => navigation.navigate('RSVPList')}
      >
        <Text style={styles.buttonText}>RSVP Now</Text>
      </TouchableOpacity>

      {/* Wedding Details */}
      <View style={styles.weddingDetails}>
        <Text style={styles.detailText}>Date: [Wedding Date]</Text>
        <Text style={styles.detailText}>Time: [Wedding Time]</Text>
        <Text style={styles.detailText}>Venue: [Wedding Venue]</Text>
        {/* Add more wedding details as needed */}
      </View>

      {/* Social Sharing */}
      <View style={styles.socialSharing}>
        <Text style={styles.shareText}>Share your wedding moments with friends!</Text>
        {/* Add social sharing buttons/icons here */}
      </View>

      {/* Feedback Section */}
      <TouchableOpacity
        style={styles.feedbackButton}
        onPress={() => navigation.navigate('Feedback')}
      >
        <Text style={styles.buttonText}>Give Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
