import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Box,
  Center,
  Fab,
  Menu,
  NativeBaseProvider,
  Pressable,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  navigationOptions,
} from "./styles/variables";
import AddButton from "../components/AddButton";
import CarrouselList from "../components/CarrouselList";

import { auth, db } from "../firebase";

const ReadingListScreen = ({ navigation }) => {
  const [uploaded, setUploaded] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
      title: "Lista de Lectura",
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
                        name="plus"
                        size={20}
                        color={colorPrincipal}
                      />
                    </Pressable>
                  );
                }}
              >
                <Menu.Item onPress={() => navigation.navigate("Create Text")}>
                  Agregar Texto
                </Menu.Item>
                <Menu.Item
                  onPress={() =>
                    alert("Esta funcionalidad todavia no esta disponible")
                  }
                >
                  Agregar Archivo
                </Menu.Item>
              </Menu>
            </Box>
          </Center>
        </NativeBaseProvider>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsuscribe = db
      .collection("texts")
      .doc(auth.currentUser.uid)
      .collection("uploaded")
      .onSnapshot((snapshot) => {
        setUploaded(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return unsuscribe;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {uploaded !== [] && (
          <CarrouselList
            title="Lecturas Subidas"
            elements={uploaded}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default ReadingListScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    height: "100%",
    paddingRight: 0,
  },
  menuItem: {
    fontFamily: fontRegular,
    color: colorText,
  },
});
