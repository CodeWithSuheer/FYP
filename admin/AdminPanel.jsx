import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./AdminPanel";
import { COLORS } from "../constants";
import admin from "../admin/admin.png";
import RegistrationRequests from "./registrationRequests/RegistrationRequests.jsx";

const AdminPanel = (props) => {
  const [requests, setRequests] = useState([]);


  const fetchPendingRequests = async () => {
    try {
      const response = await axios.get("http://localhost/pick_and_drop_app/requests.php");
      if (response.status === 200) {
        const result = response.data;
        console.log('result', result.data);
        setRequests(result.data);
      } else {
        console.error("Failed to fetch requests");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };




  // Function to approve a request
  const approveRequest = async (requestId) => {
    try {
      const response = await axios.post("http://localhost/pick_and_drop_app/approve_request.php", { user_id: requestId });
      if (response.data.status === 1) {
        fetchPendingRequests();
      } else {
        console.error("Failed to approve request:", response.data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Function to reject a request
  const rejectRequest = async (requestId) => {
    try {
      const response = await axios.post("http://localhost/pick_and_drop_app/reject_request.php", { user_id: requestId });
      if (response.data.status === 1) {
        fetchPendingRequests();
      } else {
        console.error("Failed to approve request:", response.data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Fetch pending requests when the component mounts
  useEffect(() => {
    fetchPendingRequests();
  }, []);

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.white, COLORS.lightPink]}
    >
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Image Container */}
          {/* <View style={styles.imageContainer}>
            <Image source={admin} style={styles.image} />
          </View> */}

          <View style={styles.headercontainer}>
            <Text style={styles.headertitle}>Admin Panel</Text>



            <RegistrationRequests
              requests={requests}
              approveRequest={approveRequest}
              rejectRequest={rejectRequest}
            />

            <TouchableOpacity style={styles.button} onPress={fetchPendingRequests}>
              <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>


          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default AdminPanel;
