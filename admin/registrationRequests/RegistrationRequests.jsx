import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./RegistrationRequests";
import emailjs from "@emailjs/browser";

const RegistrationRequests = ({ requests, approveRequest, rejectRequest }) => {

  const EMAILJS_SERVICE_ID = "service_9qfin3l";
  const EMAILJS_TEMPLATE_ID = "template_ik73n3f";
  const EMAILJS_PUBLIC_KEY = "0mfvWrCY6QplzNFem";

  emailjs.init(EMAILJS_PUBLIC_KEY);

  const sendApprovalEmail = (userEmail) => {
    const emailParams = {
      to_email: userEmail,
      subject: "Your Registration is Approved",
      message: "Congratulations! Your registration request has been approved.",
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams)
      .then((result) => {
        console.log("Email sent successfully:", result);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.componenttitle}>Registration Requests</Text>

      <View style={styles.cardContainer}>
        {requests.map((request) => (
          <View key={request.id} style={styles.card}>
            <Text style={styles.cardText}>
              Name: {request.firstName} {request.lastName}
            </Text>
            <Text style={styles.cardText}>Email: {request.email}</Text>
            <Text style={styles.cardText}>Address: {request.address}</Text>
            <Text style={styles.cardText}>City: {request.city}</Text>
            <Text style={styles.cardText}>MobileNo: {request.mobileNo}</Text>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  approveRequest(request.id);
                  sendApprovalEmail(request.email);
                }}
              >
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => rejectRequest(request.id)}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RegistrationRequests;
