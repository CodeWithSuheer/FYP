import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
  Platform,
  BackHandler,
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
import { useDispatch } from "react-redux";
import { loginuserAsync } from "../../store/reducers/authSlice";
import login from "../login/login.png";
import styles from "./Login";



const Login = (props) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    pin: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Handle Android back button press
  useEffect(() => {
    if (Platform.OS === "android") {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
        if (isModalVisible) {
          toggleModal();
          return true;
        }
        return false;
      });

      return () => {
        backHandler.remove();
      };
    }
  }, [isModalVisible]);


  // handleLogin
  const handleLogin = async () => {
    try {
      dispatch(loginuserAsync(formData))
        .then((response) => {
          console.log('response', response);
          if (response.payload.status === 2) {
            toggleModal();
          } else if (response.payload.status === 1) {
            if (formData.email === "admin@gmail.com" && formData.pin === "1234" && response.payload.route === "admin") {
              props.navigation.navigate("AdminPanel");
            } else if (response.payload.userDetails.userCategory === "Service Provider") {
              props.navigation.navigate("ServiceProvider");
            } else {
              props.navigation.navigate("Homepage");
            }
          } else {
            console.log('Your account status is unknown');
          }
        })
    } catch (error) {
      console.log('Error', error);
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
        <View style={styles.container}>
          {/* Image */}
          <View style={styles.imageContainer}>
            <Image source={login} style={styles.image} />
          </View>

          <View style={styles.headerTitle}>
            <Text style={styles.title}>Login To Your Account</Text>
          </View>

          {/* Form Data */}
          <View style={styles.formData}>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              placeholderTextColor={COLORS.primary}
              inputMode="email"
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />

            <TextInput
              style={styles.textInput}
              placeholder="4 digit Pin"
              placeholderTextColor={COLORS.primary}
              inputMode="numeric"
              // secureTextEntry
              onChangeText={(text) => setFormData({ ...formData, pin: text })}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal isVisible={isModalVisible} style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, width: 300 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Your request is still pending.</Text>
          <Pressable style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 5 }} onPress={toggleModal}>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>Close</Text>
          </Pressable>
        </View>
      </Modal>

    </LinearGradient>
  );
};

export default Login;
