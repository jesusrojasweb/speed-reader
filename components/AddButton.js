import { Box, Fab } from "native-base";
import React, { useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import ButtonUpload from "./ButtonUpload";
import { colorPrincipal } from "../screens/styles/variables";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";

const AddButton = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);

  const translationA = useRef(new Animated.Value(0)).current;
  const translationB = useRef(new Animated.Value(0)).current;

  const fadeA = useRef(new Animated.Value(0)).current;
  const fadeB = useRef(new Animated.Value(0)).current;

  const translation = (variable, value) => {
    Animated.timing(variable, {
      toValue: value,
    }).start();
  };

  const fade = (variable, value) => {
    Animated.timing(variable, {
      toValue: value,
    }).start();
  };

  const toggleButton = () => {
    if (isActive) {
      translation(translationA, 0);
      translation(translationB, 0);
      fade(fadeA, 0);
      fade(fadeB, 0);
    } else {
      translation(translationA, -50);
      translation(translationB, -100);
      fade(fadeA, 1);
      fade(fadeB, 1);
    }

    setTimeout(() => setIsActive(!isActive), isActive ? 400 : 0);
  };

  const addFile = () => {
    alert("Esta opcion todavia no esta disponible");
  };

  return (
    <Box position="relative" h={100} w="100%">
      {isActive && (
        <>
          <ButtonUpload
            text={"Agregar Texto"}
            icon={"text-height"}
            style={{
              transform: [{ translateY: translationB }],
              opacity: fadeB,
            }}
            onPress={() => {
              navigation.navigate("Create Text");
              toggleButton();
            }}
          />
          <ButtonUpload
            text={"Agregar Archivo"}
            icon={"file-o"}
            style={{
              transform: [{ translateY: translationA }],
              opacity: fadeA,
            }}
            onPress={addFile}
          />
        </>
      )}
      <Fab
        position="absolute"
        onPress={toggleButton}
        icon={
          <FontAwesome
            name="plus"
            size={20}
            color={"white"}
            style={{ paddingHorizontal: 2 }}
          />
        }
        style={styles.button}
      />
    </Box>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorPrincipal,
  },
});
