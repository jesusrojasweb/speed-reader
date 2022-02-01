import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import ReadingListScreen from "./ReadingListScreen";
import ReadingScreen from "./ReadingScreen";
import ProfileScreen from "./ProfileScreen";
import { colorPrincipal, colorText } from "./styles/variables";

const Tab = createBottomTabNavigator();

const DashboardScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorPrincipal,
        tabBarInactiveTintColor: colorText,
        tabBarLabelStyle: {
          display: "none",
        },
        style: {
          backgroundColor: "white",
        },
      }}
      style={styles.navigator}
    >
      <Tab.Screen
        name="List"
        component={ReadingListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={ReadingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "white",
  },
});
