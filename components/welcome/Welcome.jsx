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
import styles from "./Welcome";
import { COLORS, icons } from "../../constants";
import mainScreen from "../welcome/mainScreen.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from '../../store/reducers/ProductSlice';
import { useEffect } from "react";

const Welcome = (props) => {









  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.white, COLORS.lightPink]}
    >
      <Stack.Screen
        options={{
          // headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Image */}
          <View style={styles.imageContainer}>
            <Image source={mainScreen} style={styles.image} />
          </View>

          {/* Text Container */}
          <View style={styles.upperContainer}>
            <Text style={styles.title}>SPDS</Text>
            <Text style={styles.description}>
              Your reliable solution for pick & drop services
            </Text>
          </View>

          {/* Lower Container */}
          <View style={styles.lowerContainer}>
            <Text style={styles.headingOne}>Let's Get</Text>
            <Text style={styles.headingTwo}>Started</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Welcome;
