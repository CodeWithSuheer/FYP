import React, { useState } from "react";
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
import styles from "./waitingPage";
import { COLORS, icons, images, SIZES } from "../../constants";
import ScreenHeaderBtn from "../homepage/ScreenHeaderBtn";
import homepagebus from "../homepage/homepagebus.png";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { logoutuserAsync } from "../../store/reducers/authSlice";
import { useNavigation } from '@react-navigation/native';
import { getRequestAsync } from "../../store/reducers/requests";
import { useEffect } from "react";

const WaitingPage = ({ route }) => {
    const { requestId } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [status, setStatus] = useState("Waiting for response...");

    const userDetails = useSelector((state) => state.auth.userDetails);
    const rideRequests = useSelector((state) => state.requests.requests);
    console.log('rideRequests', rideRequests);


    useEffect(() => {
        dispatch(getRequestAsync());
        const interval = setInterval(() => {
            dispatch(getRequestAsync());
        }, 5000);

        return () => clearInterval(interval);
    }, []);




    useEffect(() => {
        const numericRequestId = parseInt(requestId, 10);
        const filteredRequest = rideRequests.find(
            (request) => request.Id === numericRequestId
        );
        console.log("filteredRequest", filteredRequest);

        // Update the status based on the request status
        if (filteredRequest) {
            setStatus(filteredRequest.status || "Waiting for response...");
        }
    }, [rideRequests]);




    // STATE FOR STORING THE STATUS

    // HANDLE LOGOUT
    const handleLogout = () => {
        try {
            dispatch(logoutuserAsync())
                .then((response) => {
                    console.log('Waiting Page response', response);
                    navigation.navigate("Login");
                });
        } catch (error) {
            console.error("Network error:", error);
        }
    }

    // HANDLE CANCEL RIDE
    const handleCancelRide = async () => {
        navigation.navigate("Homepage");
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
                            {/* <Image
                                source={props.iconUrl}
                                resizeMode="cover"
                                style={styles.btnImg(props.dimension)}
                            /> */}
                        </TouchableOpacity>
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Pick & Drop</Text>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.homePageContainerTitle}>We are connecting with service providers.</Text>
                            <Text style={styles.homePageContainerTitle}>{status}</Text>
                        </View>

                        <View style={styles.instruction}>
                            <View style={styles.instruction_data}>
                                <Text style={styles.instruction_title}>Please Wait.</Text>
                                <Text style={styles.instruction_text}>{'\u2022'} Waiting for response from Service Provider</Text>
                                <Text style={styles.instruction_text}>{'\u2022'} Connecting with nearby service providers.</Text>
                                <Text style={styles.instruction_text}>{'\u2022'} The cost of your ride is calculated based on the distance to your destination.</Text>
                                <Text style={styles.instruction_text}>{'\u2022'} Please be aware of any weather or traffic conditions that may affect your ride.</Text>
                                <Text style={styles.instruction_text}>{'\u2022'} You can cancel the ride at any time. Tap 'Cancel Ride' if needed.</Text>
                            </View>


                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttonRequest} onPress={handleCancelRide}>
                                    <Text style={styles.buttonText}>Cancel Ride</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default WaitingPage;
