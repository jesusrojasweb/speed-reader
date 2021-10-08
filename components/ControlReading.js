import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  colorText,
  colorTitle,
  fontRegular,
} from "../screens/styles/variables";
import { FontAwesome5 } from "@expo/vector-icons";

const ControlReading = ({ icon, text, style, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      onPress={onPress}
    >
      <FontAwesome5
        name={icon}
        size={24}
        color={colorTitle}
        // style={{ paddingHorizontal: 4, paddingVertical: 2 }}
      />
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default ControlReading;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: colorText,
    fontFamily: fontRegular,
    fontSize: 12,
  },
});
