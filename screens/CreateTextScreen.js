import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { TextArea, Center, NativeBaseProvider } from "native-base";
import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  navigationOptions,
} from "./styles/variables";
import ButtonType from "../components/ButtonType";
import Inputs from "../components/Inputs";
import { auth, db } from "../firebase";

const CreateTextScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
    });
  }, [navigation]);

  const createText = async () => {
    if (name.trim() !== "" && text.trim() !== "") {
      setIsLoading(true);

      await db
        .collection("texts")
        .doc(auth.currentUser.uid)
        .collection("uploaded")
        .add({
          name,
          text,
          isFile: false,
          author: auth.currentUser.displayName,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          alert(error);
        });
      setIsLoading(false);
    } else {
      alert("Todos los campos son requeridos");
    }
  };

  return (
    <View style={styles.container}>
      <Inputs
        placeholder="Nombre del Documento"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <NativeBaseProvider>
        <Center>
          <TextArea
            value={text}
            onChangeText={(textInput) => setText(textInput)}
            h={150}
            placeholder="Texto de lectura"
            w={{
              base: "100%",
              // md: "25%",
            }}
            style={styles.textArea}
          />
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={colorPrincipal}
              style={{ marginTop: 40 }}
            />
          )}
          <ButtonType
            title="Agregar Texto"
            styleParentButton={{ marginTop: 40, width: "100%" }}
            onPress={createText}
          />
        </Center>
      </NativeBaseProvider>
    </View>
  );
};

export default CreateTextScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    height: "100%",
    paddingTop: 20,
  },
  textArea: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    borderRadius: 8,
    borderBottomColor: "transparent",
    fontSize: 14,
    fontFamily: fontRegular,
    bottom: 0,
    color: colorText,
    elevation: 4,
  },
});
