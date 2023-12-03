import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader";
import { useDispatch } from "react-redux";
import { logoutuserAsync } from "../../store/reducers/authSlice";

const ScreenHeaderBtn = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logoutuserAsync())
        .then((response) => {
          console.log('response', response);
          props.navigation.navigate("Login");
        });
    } catch (error) {
      console.error("Network error:", error);
    }
  }


  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleLogout}>
      <Image
        source={props.iconUrl}
        resizeMode="cover"
        style={styles.btnImg(props.dimension)}

      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
