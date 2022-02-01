import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  fontSemiBold,
  navigationOptions,
} from "./styles/variables";
import CarrouselList from "../components/CarrouselList";

import { auth, db } from "../firebase";
import MenuDots from "../components/MenuDots";

const ReadingListScreen = ({ navigation }) => {
  const [uploaded, setUploaded] = useState([]);
  const [reading, setReading] = useState([]);
  const [toRead, setToReadompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
      title: "Lista de Lectura",
      headerRight: () => {
        const menuItems = [
          {
            text: "Agregar Texto",
            onPress: () => navigation.navigate("Create Text"),
          },
          {
            text: "Agregar Archivo",
            onPress: () =>
              alert("Esta funcionalidad todavia no esta disponible"),
          },
        ];
        return (
          <MenuDots
            items={menuItems}
            Icon={() => (
              <FontAwesome name="plus" size={20} color={colorPrincipal} />
            )}
            style={{
              marginRight: 31,
            }}
          />
        );
      },
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

        const readingFilter = snapshot.docs.filter(
          (doc) => doc.data().actualChapter > 0 && !doc.data().isCompleted
        );
        if (readingFilter) {
          setReading(
            readingFilter.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
        const toRead = snapshot.docs.filter((doc) => !doc.data().isCompleted);
        if (toRead) {
          setToReadompleted(
            toRead.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
        setIsLoading(false);
      });
    return unsuscribe;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {reading[0] !== undefined && (
          <CarrouselList
            title="Lecturas Recientes"
            elements={reading}
            navigation={navigation}
          />
        )}
        {toRead[0] !== undefined && (
          <CarrouselList
            title="Lecturas por leer"
            elements={toRead}
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
        {toRead[0] === undefined && reading[0] === undefined && !isLoading && (
          <Text style={styles.info}>No tienes textos por leer</Text>
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
  info: {
    color: colorText,
    marginTop: 30,
    fontFamily: fontSemiBold,
    paddingRight: 30,
    textAlign: "center",
  },
});
