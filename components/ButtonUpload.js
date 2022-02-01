import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  navigationOptions,
} from "../screens/styles/variables";

const ButtonUpload = ({ text, icon, style, onPress }) => {
  return (
    <Animated.View
      style={{
        position: "absolute",
        right: 28,
        bottom: -140,
        ...style,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={{ fontFamily: fontRegular, color: colorText }}>
          {text}
        </Text>
        <View
          style={{
            backgroundColor: "white",
            borderColor: colorText,
            borderWidth: 1,
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 11,
            marginLeft: 10,
          }}
        >
          <FontAwesome
            name={icon}
            size={10}
            color={"black"}
            style={{ paddingHorizontal: 0 }}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ButtonUpload;
