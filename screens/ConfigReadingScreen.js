import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import ImageCard from "../components/ImageCard";
import { backgroundDefault } from "./styles/variables";

const ConfigReadingScreen = ({ navigation, route }) => {
  const isFile = route?.isFile || false;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Configuracion de lectura",
    });
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageCard isFile={isFile} width={151} height={204} />
      </View>
      <View style={styles.options}>
        <Text>Hola</Text>
      </View>
    </View>
  );
};

export default ConfigReadingScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    paddingTop: 30,
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
  },
  options: {
    elevation: 10,
    // height: 40,
  },
});
