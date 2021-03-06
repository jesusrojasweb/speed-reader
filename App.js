import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";

import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from "@expo-google-fonts/noto-serif";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoaderStart from "./components/LoaderStart";
import {
  colorBackground,
  colorTitle,
  fontTitle,
} from "./screens/styles/variables";
import DashboardScreen from "./screens/DashboardScreen";
import CreateTextScreen from "./screens/CreateTextScreen";
import ConfigReadingScreen from "./screens/ConfigReadingScreen";

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
LogBox.ignoreLogs(["Warning: forwardRef"]);

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontFamily: fontTitle,
    fontSize: 16,
  },
  headerTintColor: colorTitle,
  headerTitleAlign: "center",
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    NotoSerif_400Regular,
    NotoSerif_700Bold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <LoaderStart />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Create Text" component={CreateTextScreen} />
          <Stack.Screen name="Config Screen" component={ConfigReadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
