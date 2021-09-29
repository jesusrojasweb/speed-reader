import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Box, Center, Fab, NativeBaseProvider } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  navigationOptions,
} from "./styles/variables";
import AddButton from "../components/AddButton";

const ReadingListScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
      title: "Lista de Lectura",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Aqui se muestra la lista</Text>
      <NativeBaseProvider>
        <Center flex={1}>
          <AddButton />
        </Center>
      </NativeBaseProvider>
    </View>
  );
};

export default ReadingListScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    height: "100%",
  },
});
