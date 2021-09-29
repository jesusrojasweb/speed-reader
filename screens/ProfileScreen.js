import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  CEnter,
  NativeBaseProvider,
  Center,
} from "native-base";

import {
  colorPrincipal,
  colorText,
  fontTitle,
  navigationOptions,
} from "./styles/variables";
import { FontAwesome } from "@expo/vector-icons";
import { auth } from "../firebase";

const ProfileScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
      headerRight: () => (
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
                      <FontAwesome
                        name="bars"
                        size={20}
                        color={colorPrincipal}
                      />
                    </Pressable>
                  );
                }}
              >
                <Menu.Item onPress={signOutUser}>Cerrar Sesión</Menu.Item>
              </Menu>
            </Box>
          </Center>
        </NativeBaseProvider>
      ),
    });
  }, [navigation]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Home");
    });
  };

  return (
    <View>
      <Text>Aqui se muestra el perfil</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
