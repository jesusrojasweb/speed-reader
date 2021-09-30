import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { colorTitle } from "../screens/styles/variables";

const ImageCard = ({ isFile, width = 120, height = 162 }) => {
  const sizes = {
    width,
    height,
  };

  return (
    <>
      {isFile ? (
        <Image
          // size="xlarge"
          source={{
            uri: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/share",
          }}
          containerStyle={{ ...styles.image, ...sizes }}
          rounded
        />
      ) : (
        <View
          style={{
            ...styles.image,
            ...styles.notFile,
            ...sizes,
          }}
        >
          <FontAwesome
            name="text-height"
            size={30}
            color={colorTitle}
            style={{ paddingHorizontal: 0 }}
          />
        </View>
      )}
    </>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  image: {
    borderRadius: 9,
  },
  notFile: {
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
});
