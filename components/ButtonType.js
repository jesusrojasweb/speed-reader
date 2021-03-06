import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

import {
  colorLight,
  colorPrincipal,
  fontSemiBold,
} from "../screens/styles/variables";

const ButtonType = ({
  title,
  type,
  onPress,
  styleParentButton = {},
  styleParentText = {},
  icon,
}) => {
  return (
    <TouchableOpacity
      title={title}
      onPress={onPress}
      style={styles(styleParentButton, styleParentText, type).button}
    >
      <Text style={styles(styleParentButton, styleParentText, type).btnText}>
        {icon && <FontAwesome name={icon} size={16} color={colorLight} />}
        {` ${title}`}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonType;

const styles = (styleParentButton, styleParentText, type) =>
  StyleSheet.create({
    button: {
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 12,
      borderColor: colorPrincipal,
      backgroundColor: type === "primary" ? colorPrincipal : "transparent",
      ...styleParentButton,
    },
    btnText: {
      fontFamily: fontSemiBold,
      color: type === "primary" ? "white" : colorPrincipal,
      fontSize: 16,
      textAlign: "center",
      ...styleParentText,
    },
  });
