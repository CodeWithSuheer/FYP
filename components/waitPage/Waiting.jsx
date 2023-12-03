import React, { useState, useEffect } from "react";
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
import { COLORS } from "../../constants";
import styles from "../waitPage/Waiting";
import waiting from "../waitPage/waiting.png";

const Waiting = (props) => {
  const [status, setStatus] = useState("Pending"); // Initialize status as "Pending"

  const userId = props.route.params.userId; // Retrieve userId from navigation params

  const checkStatus = async () => {
    try {
      // Make an API call to fetch the status based on the userId
      const response = await fetch(
        `http://192.168.0.102/check_status.php?userId=${userId}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setStatus(data.status); // Update the status based on the response
      } else {
        console.error("Failed to fetch status");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    // Check the status when the component mounts
    checkStatus();
  }, []);

  const navigateToHome = () => {
    if (status === "approved") {
      props.navigation.navigate("Homepage");
    } else {
      alert("Your request is still pending. Please wait for admin approval.");
    }
  };

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
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={waiting} resizeMode="contain" style={styles.image} />
        </View>

        <View style={styles.container}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>Waiting for Admin Response</Text>
            <Text style={styles.title}>{`Status: ${status}`}</Text>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // When the "Refresh" button is pressed, check the status and navigate accordingly
                checkStatus();
                navigateToHome();
              }}
            >
              <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Waiting;
