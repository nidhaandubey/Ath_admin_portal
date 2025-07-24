// screens/DashboardScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const DashboardScreen = ({ navigation }) => {
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployeeIDs();
  }, []);

const fetchEmployeeIDs = async () => {
  try {
    const empIDs = [0,1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14];
    let combinedData = [];
    for (const id of empIDs) {
      try {
        const res = await axios.get(`https://hrmapi.bahi-khata.in/LocationTrack/GetEmplLastLocation?empID=${id}`);
        if (Array.isArray(res.data)  && res.data.length > 0) {
          combinedData = [...combinedData, ...res.data];
        }
      } catch (innerErr) {
        console.error(`Error fetching data for empID=${id}`, innerErr);
      }
    }

    const uniqueIDs = [...new Set(combinedData.map(item => item.empID))];
    setEmployeeList(uniqueIDs);
  } catch (err) {
    console.error('Error in fetchEmployeeIDs:', err);
  } finally {
    setLoading(false);
  }
};


  const handlePress = (empID) => {
    navigation.navigate('TrackingHistory', { empID});
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Text style={styles.empText}>Employee ID: {item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Executive Dashboard</Text> */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={employeeList}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
        />
      )}
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#007AFF',
    color: 'white',
    padding: 12,
    textAlign: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  empText: {
    fontSize: 16,
  },
});
