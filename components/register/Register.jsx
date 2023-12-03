import axios from 'axios';
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Register";
import { COLORS } from "../../constants";
import register from "../register/register.png";
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsync } from '../../store/reducers/ProductSlice';
import { useEffect } from 'react';
import { createuserAsync } from '../../store/reducers/authSlice';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



const data = [
  { label: 'VU Raiwind  Road Campus', value: 'VU Raiwind  Road Campus' },
  { label: 'VU Davis Road Campus', value: 'VU Davis Road Campus' },
  { label: 'VU  Defence Road Campus', value: 'VU  Defence Road Campus' },
];



const Register = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState(null);



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    institute: "",
    email: "",
    pin: "",
    address: "",
    city: "",
    companyName: "",
    userCategory: "",
    route: "client",
    status: "pending",
  });


  // In the Register component
  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const updatedFormData = {
          ...formData,
          institute: selectedInstitute,
        };

        dispatch(createuserAsync(updatedFormData))
          .then((response) => {
            console.log('response', response);
            props.navigation.navigate("Login");
          });
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };



  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.mobileNo === "" ||
      formData.email === "" ||
      formData.pin === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.userCategory === "" // Require userCategory to be selected
    ) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return false;
    }

    if (formData.pin.length !== 4) {
      Alert.alert("Validation Error", "PIN must be exactly 4 digits.");
      return false;
    }

    return true;
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
          <Image source={register} resizeMode="contain" style={styles.image} />
        </View>

        <View style={styles.container}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>Create Account</Text>
          </View>

          <View style={styles.formData}>
            {/* First Name */}
            <TextInput
              style={styles.textInput}
              value={formData.firstName}
              onChangeText={(value) => handleInputChange("firstName", value)}
              placeholder="First Name"
              placeholderTextColor={COLORS.primary}
              inputMode="text"
              required
            />
            {/* Second Name */}
            <TextInput
              style={styles.textInput}
              value={formData.lastName}
              onChangeText={(value) => handleInputChange("lastName", value)}
              placeholder="Second Name"
              placeholderTextColor={COLORS.primary}
              inputMode="text"
              required
            />
            {/* Mobile No */}
            <TextInput
              style={styles.textInput}
              value={formData.mobileNo}
              onChangeText={(value) => handleInputChange("mobileNo", value)}
              placeholder="Mobile No"
              placeholderTextColor={COLORS.primary}
              inputMode="numeric"
              required
            />

            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Institute' : 'Select Institute'}
              value={selectedInstitute}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setSelectedInstitute(item.value);
                setIsFocus(false);
              }}
            />


            {/* Email */}
            <TextInput
              style={styles.textInput}
              value={formData.email}
              onChangeText={(value) => handleInputChange("email", value)}
              placeholder="Enter Email"
              placeholderTextColor={COLORS.primary}
              inputMode="email"
              required
            />


            {/* 4-Digit Pin */}
            <TextInput
              style={styles.textInput}
              value={formData.pin}
              onChangeText={(value) => handleInputChange("pin", value)}
              placeholder="Pin (4 digits)"
              placeholderTextColor={COLORS.primary}
              inputMode="numeric"
              required
            />


            {/* Address */}
            <TextInput
              style={styles.textInput}
              value={formData.address}
              onChangeText={(value) => handleInputChange("address", value)}
              placeholder="Address"
              placeholderTextColor={COLORS.primary}
              inputMode="text"
              required
            />


            {/* City */}
            <TextInput
              style={styles.textInput}
              value={formData.city}
              onChangeText={(value) => handleInputChange("city", value)}
              placeholder="Enter City Name"
              placeholderTextColor={COLORS.primary}
              inputMode="text"
              required
            />

            {/* Company Name */}
            <TextInput
              style={styles.textInput}
              value={formData.companyName}
              onChangeText={(value) => handleInputChange("companyName", value)}
              placeholder="Company Name, Service Provider Only"
              placeholderTextColor={COLORS.primary}
              inputMode="text"
              required
            />



            {/* Radio Buttons for User Category */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>Select User Category:</Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor:
                        formData.userCategory === "Student"
                          ? COLORS.primary
                          : COLORS.lightGray,
                    },
                  ]}
                  onPress={() => handleInputChange("userCategory", "Student")}
                >
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color:
                          formData.userCategory === "Student"
                            ? COLORS.white
                            : COLORS.black,
                      },
                    ]}
                  >
                    Student
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor:
                        formData.userCategory === "Service Provider"
                          ? COLORS.primary
                          : COLORS.lightGray,
                    },
                  ]}
                  onPress={() =>
                    handleInputChange("userCategory", "Service Provider")
                  }
                >
                  <Text
                    style={[
                      styles.radioText,
                      {
                        color:
                          formData.userCategory === "Service Provider"
                            ? COLORS.white
                            : COLORS.black,
                      },
                    ]}
                  >
                    Service Provider
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End of Radio Buttons */}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Register;
