import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import ImageCard from "../components/ImageCard";
import {
  colorText,
  colorTitle,
  fontRegular,
  fontSemiBold,
} from "../screens/styles/variables";

const BookCard = (props) => {
  const { name, isFile, author, navigation } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Config Screen", { ...props });
      }}
      style={styles.container}
    >
      <ImageCard isFile={isFile} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.author}>{author}</Text>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  image: {
    borderRadius: 9,
    width: 120,
    height: 162,
  },
  notFile: {
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: colorText,
    fontFamily: fontSemiBold,
    fontSize: 13,
    marginTop: 10,
  },
  author: {
    color: colorText,
    fontFamily: fontRegular,
    fontSize: 10,
  },
});
