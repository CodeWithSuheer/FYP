import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Homepage";
import { COLORS, icons, images, SIZES } from "../../constants";
import ScreenHeaderBtn from "../homepage/ScreenHeaderBtn";
import homepagebus from "../homepage/homepagebus.png";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { logoutuserAsync, serviceProviderAsync } from "../../store/reducers/authSlice";
// import styles from "./screenheader";
import { useNavigation } from '@react-navigation/native';
import { createRequestAsync } from "../../store/reducers/requests";

const Homepage = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);


  useEffect(() => {
    dispatch(serviceProviderAsync());
  }, []);

  // GETTING USER-DETAILS
  const userDetails = useSelector((state) => state.auth.userDetails);
  const serviceProvider = useSelector((state) => state.auth.serviceProviderData);

  console.log('serviceProvider', serviceProvider);

  const serviceProviderOptions = serviceProvider
    ? serviceProvider.map((provider) => ({
      label: provider.companyName,
      value: provider.id.toString(),
    }))
    : [];

  const instituteRoutesMap = {
    'VU Raiwind  Road Campus': ['Main Lahore', 'Old Lahore'],
    'VU Davis Road Campus': ['Dharampura', 'Mughalpura', 'Jallo'],
    'VU  Defence Road Campus': ['Wapda Town', 'Johar Town', 'Muslim Town'],
  };

  const userInstitute = userDetails?.institute;
  const userRoutes = instituteRoutesMap[userInstitute] || [];

  const data = userRoutes.map((route) => ({ label: route, value: route }));

  // HANDLE LOGOUT
  const handleLogout = () => {
    try {
      dispatch(logoutuserAsync()).then((response) => {
        console.log('user logout', response);
        navigation.navigate('Login');
      });
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  // HANDLE REQUEST
  const handleRequest = async () => {
    if (!userDetails || !selectedRoute || !selectedTransport) {
      console.error('Missing user details, selected route, or selected service provider');
      return;
    }

    // Find the selected service provider based on the ID
    const selectedServiceProvider = serviceProvider.find(provider => provider.id === parseInt(selectedTransport));

    if (!selectedServiceProvider) {
      console.error('Selected service provider not found');
      return;
    }

    const requestData = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      institute: userDetails.institute,
      selectedRoute,
      selectedTransport: selectedServiceProvider.companyName,
      status: ''
    };
    console.log('requestData', requestData);

    try {
      dispatch(createRequestAsync(requestData))
        .then((response) => {
          const requestId = response.payload.requestId;
          console.log('Request created with Id:', requestId);
          navigation.navigate('WaitingPage', { requestId });
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
          headerRight: () => (
            <TouchableOpacity style={styles.btnContainer} onPress={handleLogout}>
              <Image
                source={props.iconUrl}
                resizeMode="cover"
                style={styles.btnImg(props.dimension)}
              />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Pick & Drop</Text>
            <Text style={styles.text}>
              {userDetails?.firstName} {userDetails?.lastName}
            </Text>

            <View style={styles.bodyContainer}>
              <Text style={styles.homePageContainerTitle}>These routes are specific to your chosen institute</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Choose Route' : 'Choose Route'}
                value={selectedRoute}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setSelectedRoute(item.value);
                  setIsFocus(false);
                }}
              />


              {serviceProvider && (
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={serviceProviderOptions}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Transport' : 'Select Transport'}
                  value={selectedRoute}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setSelectedTransport(item.value);
                    setIsFocus(false);
                  }}
                />
              )}
            </View>

            <View style={styles.instruction}>
              <View style={styles.instruction_data}>

                <Text style={styles.instruction_title}>Instruction</Text>
                <Text style={styles.instruction_text}>Request can only be made between 1pm to 2pm</Text>

              </View>



              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonRequest} onPress={handleRequest}>
                  <Text style={styles.buttonText}>Request For Ride</Text>
                </TouchableOpacity>
              </View>

            </View>



          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Homepage;
