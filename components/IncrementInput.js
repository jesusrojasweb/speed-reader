import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  colorPrincipal,
  colorText,
  colorWords,
  fontMedium,
  fontRegular,
} from "../screens/styles/variables";
import { Input } from "react-native-elements";

const IncrementInput = ({ label, value, change, min, max, amount }) => {
  const increment = () => {
    const counter = value + amount;

    if (counter <= max || max === undefined) {
      change(counter);
    }
  };
  const decrement = () => {
    const counter = value - amount;

    if (counter >= min) {
      change(counter);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={decrement}>
          <FontAwesome
            name="minus"
            size={15}
            color={colorText}
            // style={{ paddingHorizontal: 2 }}
          />
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={increment}>
          <FontAwesome
            name="plus"
            size={15}
            color={colorText}
            // style={{ paddingHorizontal: 2 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IncrementInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorWords,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    justifyContent: "space-between",
  },
  label: {
    color: colorText,
    fontFamily: fontMedium,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: colorPrincipal,
    fontFamily: fontRegular,
    fontSize: 18,
    marginHorizontal: 10,
  },
});
