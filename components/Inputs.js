import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text } from "react-native-elements";
import {
  colorPrincipal,
  colorText,
  fontRegular,
} from "../screens/styles/variables";

const Inputs = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      {/* <TouchableWithoutFeedback> */}
      <Input
        {...props}
        inputStyle={{
          fontFamily: fontRegular,
          color: isFocus ? colorPrincipal : colorText,
          fontSize: 14,
        }}
        inputContainerStyle={{
          ...styles(isFocus).input,
          ...props.container,
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
};

export default Inputs;

const styles = (isFocus) =>
  StyleSheet.create({
    container: {},
    input: {
      backgroundColor: "white",
      paddingHorizontal: 18,
      marginLeft: -8,
      borderRadius: 8,
      borderBottomColor: "transparent",
      fontSize: 14,
      bottom: 0,
      color: colorText,
      elevation: 4,
    },
  });
