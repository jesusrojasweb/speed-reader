import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colorText, fontTitle } from "../screens/styles/variables";
import BookCard from "./BookCard";

const CarrouselList = ({ elements = [], title = "Lecutras", navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: fontTitle, color: colorText, marginBottom: 10 }}
      >
        {title}
      </Text>
      <ScrollView horizontal={true}>
        {elements !== [] && (
          <>
            {elements.map(({ id, data }) => (
              <BookCard key={id} {...data} navigation={navigation} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default CarrouselList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 33,
  },
});
