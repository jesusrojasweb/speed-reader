import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Box,
  Center,
  Fab,
  Menu,
  NativeBaseProvider,
  Pressable,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { colorPrincipal } from "../screens/styles/variables";

const MenuDots = ({ items, Icon, style }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px={3}>
        <Box>
          <Menu
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accesibilityLabel="More options menu"
                  {...triggerProps}
                  style={style}
                >
                  <Icon />
                </Pressable>
              );
            }}
          >
            {items.map(({ text, onPress }) => (
              <Menu.Item onPress={onPress}>{text}</Menu.Item>
            ))}
          </Menu>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default MenuDots;

const styles = StyleSheet.create({});
