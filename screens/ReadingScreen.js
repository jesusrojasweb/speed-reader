import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { navigationOptions } from "./styles/variables";

const ReadingScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Aqui se leen los libros</Text>
    </View>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({});
