import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import {
  backgroundDefault,
  colorTitle,
  fontSubTitle,
  fontTitle,
} from "./styles/variables";

import HomeIllustration from "../assets/HomeIllustration";
import ButtonType from "../components/ButtonType";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleNavigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fast Reader</Text>
      <Text style={styles.subtitle}>Lee a la velocidad de la luz</Text>
      <View style={styles.illustration}>
        <HomeIllustration />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonType
          title={"Crea tu Cuenta"}
          onPress={() => handleNavigate("Register")}
        />
        <ButtonType
          title={"Inicia Sesión"}
          type="primary"
          onPress={() => handleNavigate("Login")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    paddingVertical: 40,
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontFamily: fontTitle,
    fontSize: 48,
    color: colorTitle,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: fontSubTitle,
    fontSize: 20,
    color: colorTitle,
  },
  illustration: {
    // backgroundColor: "gray",
    height: "60%",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
