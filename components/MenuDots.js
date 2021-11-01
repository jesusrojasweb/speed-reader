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

const MenuDots = ({ items }) => {
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
                  style={{
                    marginRight: 31,
                  }}
                >
                  <FontAwesome name="plus" size={20} color={colorPrincipal} />
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
