import React, { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
  backgroundDefault,
  colorPrincipal,
  colorText,
  colorTitle,
  fontSemiBold,
  fontTitle,
  navigationOptions,
} from "./styles/variables";
import { FontAwesome } from "@expo/vector-icons";
import { auth, db } from "../firebase";
import { Avatar } from "react-native-elements";
import CarrouselList from "../components/CarrouselList";

const ProfileScreen = ({ navigation }) => {
  const [uploaded, setUploaded] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useLayoutEffect(() => {
    // console.log(auth.currentUser.photoURL);

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
        const favoriteFilter = snapshot.docs.filter(
          (doc) => doc.data().isFavorite
        );
        if (favoriteFilter) {
          setFavorites(
            favoriteFilter.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
        const completedFilter = snapshot.docs.filter(
          (doc) => doc.data().isCompleted
        );
        if (completedFilter) {
          setCompleted(
            completedFilter.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
        setIsLoading(false);
      });
    return unsuscribe;
  });

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Home");
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.photoContainer}>
          <Avatar
            source={{
              uri: auth.currentUser.photoURL,
            }}
            containerStyle={styles.profilePhoto}
            size="xlarge"
            rounded
          />
          <Text style={styles.profileName}>{auth.currentUser.displayName}</Text>
        </View>
        <View style={styles.content}>
          {favorites[0] !== undefined && (
            <CarrouselList
              title="Libros Favoritos"
              elements={favorites}
              navigation={navigation}
            />
          )}
          {completed[0] !== undefined && (
            <CarrouselList
              title="Lecturas Completadas"
              elements={completed}
              navigation={navigation}
            />
          )}
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={colorPrincipal}
              style={{ marginTop: 40, paddingRight: 30 }}
            />
          )}
          {favorites[0] === undefined &&
            completed[0] === undefined &&
            !isLoading && (
              <Text style={styles.info}>
                No tiene Textos marcados como Favoritos ni completadas
              </Text>
            )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    height: "100%",
    paddingRight: 0,
  },
  photoContainer: {
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 30,
  },
  profilePhoto: {
    width: 110,
    height: 110,
  },
  profileName: {
    fontFamily: fontTitle,
    color: colorTitle,
    textAlign: "center",
    paddingTop: 25,
    fontSize: 20,
  },
  info: {
    color: colorText,
    marginTop: 30,
    fontFamily: fontSemiBold,
    paddingRight: 30,
    textAlign: "center",
  },
  content: {
    marginTop: 20,
  },
});
