import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  navigationOptions,
} from "./styles/variables";
import CarrouselList from "../components/CarrouselList";

import { auth, db } from "../firebase";
import MenuDots from "../components/MenuDots";

const ReadingListScreen = ({ navigation }) => {
  const [uploaded, setUploaded] = useState([]);
  const [reading, setReading] = useState([]);
  const [completed, setCompleted] = useState([]);

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
        {uploaded[0] !== undefined && (
          <CarrouselList
            title="Lecturas Subidas"
            elements={uploaded}
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
