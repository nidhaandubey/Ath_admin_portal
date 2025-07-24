// TrackingHistoryScreen.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

const { height } = Dimensions.get('window');

const TrackingHistoryScreen = ({ route }) => {
  const { empID } = route.params;
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrackingHistory = async () => {
    try {
      const response = await axios.get(`https://hrmapi.bahi-khata.in/LocationTrack/GetEmplLastLocation?empID=${empID}`);
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching location history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrackingHistory();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading location history...</Text>
      </View>
    );
  }

  if (!locations.length) {
    return (
      <View style={styles.center}>
        <Text>No location history found.</Text>
      </View>
    );
  }

  const coordinates = locations.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const initialRegion = {
    latitude: locations[0].lat,
    longitude: locations[0].long,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {coordinates.map((coord, index) => (
          <Marker key={index} coordinate={coord} />
        ))}
        <Polyline coordinates={coordinates} strokeWidth={3} strokeColor="blue" />
      </MapView>

      <ScrollView style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Location History</Text>
        {locations.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <Text>📍 Lat: {item.lat}, Long: {item.long}</Text>
            <Text>🕒 {new Date(item.trackDate).toLocaleString()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrackingHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: height * 0.5,
    width: '100%',
  },
  historyContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f4f7',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
