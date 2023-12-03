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
import { COLORS, icons, images, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logoutuserAsync } from "../../store/reducers/authSlice";
import { useNavigation } from '@react-navigation/native';
import styles from "./serviceProvider";
import { useEffect } from "react";
import { getRequestAsync, updateRequestAsync } from "../../store/reducers/requests";




const ServiceProvider = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();


    useEffect(() => {
        dispatch(getRequestAsync());
    }, []);

    // GETTING USER-DETAILS
    const userDetails = useSelector((state) => state.auth.userDetails);
    console.log('userDetails', userDetails);


    // HERE WE ARE GETTING ALL REQUESTS DETAILS
    const rideRequests = useSelector((state) => state.requests.requests);
    console.log('rideRequests', rideRequests);


    const filteredRequests = Array.isArray(rideRequests)
        ? rideRequests.filter(request => request.selectedTransport === userDetails?.companyName && request.status === '')
        : [];

    console.log('filteredRequests', filteredRequests);

    useEffect(() => {
        console.log('Updated rideRequests', rideRequests);
    }, [rideRequests]);


    // HANDLE APPROVE REQUEST
    const handleRequest = (requestId, status) => {
        try {
            dispatch(updateRequestAsync({ id: requestId, status }))
                .then((response) => {
                    console.log('response', response);
                    dispatch(getRequestAsync());
                })

        } catch (error) {
            console.error('Failed to approve request:', error);
        }
    };




    // HANDLE LOGOUT
    const handleLogout = () => {
        try {
            dispatch(logoutuserAsync())
                .then((response) => {
                    console.log('Home Screen response', response);
                    navigation.navigate("Login");
                });
        } catch (error) {
            console.error("Network error:", error);
        }
    }


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
                        <Text style={styles.title}>Service Provider</Text>

                        <View style={styles.cardContainer}>
                            {filteredRequests && filteredRequests.map((request, index) => (
                                <View key={index} style={styles.card}>
                                    <Text style={styles.cardText}>
                                        Name: {request.firstName} {request.lastName}
                                    </Text>
                                    <Text style={styles.cardText}>From: {request.institute}</Text>
                                    <Text style={styles.cardText}>To: {request.selectedRoute}</Text>
                                    <Text style={styles.cardText}>Transport Company: {request.selectedTransport}</Text>


                                    {/* -------- BUTTONS FOR APPROVAL & REJECTION */}
                                    <View style={styles.btnContainer}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => handleRequest(request.Id, 'approved')}
                                        >
                                            <Text style={styles.buttonText}>Approve</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => handleRequest(request.Id, 'rejected')}
                                        >
                                            <Text style={styles.buttonText}>Reject</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>


                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default ServiceProvider;
