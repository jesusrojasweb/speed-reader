import React, { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextArea, Center, NativeBaseProvider, Accordion } from "native-base";
import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  fontRegular,
  navigationOptions,
} from "./styles/variables";
import ButtonType from "../components/ButtonType";
import AccordionItem from "../components/AccordionItem";
import Inputs from "../components/Inputs";
import { auth, db } from "../firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const CreateTextScreen = ({ navigation, route }) => {
  const name = route?.params?.name || "";
  const chapters = route?.params?.chapters || [];
  const textId = route?.params?.textId || "";
  console.log("\n\n\n\n\n");
  console.log("textIdTop", textId);

  const [nameInput, setNameInput] = useState(name);
  // const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chaptersInput, setChaptersInput] = useState(chapters);

  const forceUpdate = useForceUpdate();

  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
      // title: route?.params === undefined ? "Crear Texto" : "Editar Texto",
    });
  }, [navigation, chapters]);

  const createText = async () => {
    let isEmpty = false;

    if (chaptersInput[0] !== undefined) {
      chaptersInput.forEach(({ name, content }) => {
        if (name === "") isEmpty = true;

        if (content === "") isEmpty = true;
      });
    } else {
      isEmpty = true;
    }

    if (nameInput.trim() !== "" && !isEmpty) {
      setIsLoading(true);

      if (route.params === undefined) {
        await db
          .collection("texts")
          .doc(auth.currentUser.uid)
          .collection("uploaded")
          .add({
            name: nameInput,
            chapters: chaptersInput,
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
        const { author, isFile, actualChapter, isFavorite } = route.params;
        await db
          .collection("texts")
          .doc(auth.currentUser.uid)
          .collection("uploaded")
          .doc(route.params.textId)
          .set({
            name: nameInput,
            chapters: chaptersInput,
            author,
            isFile,
            isFavorite,
            actualChapter,
            isComplete: false,
          })
          .then(() => {
            navigation.navigate("Config Screen", {
              name: nameInput,
              chapters: chaptersInput,
              author,
              isFile,
              isFavorite,
              actualChapter,
              isComplete: false,
              id: textId,
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
      setIsLoading(false);
    } else {
      alert("Todos los campos son requeridos");
    }
  };

  const addCapter = () => {
    const newChapter = [
      ...chaptersInput,
      {
        id: chaptersInput.length,
        name: "",
        content: "",
      },
    ];

    setChaptersInput(newChapter);
  };

  const editChapter = ({ id, textName, textContent }) => {
    const chaptersCopy = chaptersInput;

    chaptersCopy[id].name =
      textName !== undefined ? textName : chaptersCopy[id]?.name;
    chaptersCopy[id].content =
      textContent !== undefined ? textContent : chaptersCopy[id]?.content;
    setChaptersInput(chaptersCopy);
    forceUpdate();
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled
      contentContainerStyle={styles.container}
    >
      <ScrollView>
        <NativeBaseProvider>
          <Center>
            <Inputs
              placeholder="Nombre del Documento"
              value={nameInput}
              onChangeText={(text) => setNameInput(text)}
              container={{
                width: "100%",
              }}
            />
            <Accordion
              style={{
                width: "100%",
              }}
            >
              {chaptersInput.map(({ id, name, content }) => (
                <Accordion.Item>
                  <Accordion.Summary>
                    {name}
                    <Accordion.Icon />
                  </Accordion.Summary>
                  <Accordion.Details>
                    <Inputs
                      placeholder="Nombre del Capitulo"
                      value={name}
                      onChangeText={(textName) => {
                        editChapter({ id, textName });
                      }}
                    />
                    <TextArea
                      value={content}
                      onChangeText={(textContent) => {
                        editChapter({ id, textContent });
                      }}
                      h={150}
                      placeholder="Texto del capitulo"
                      w={{
                        base: "100%",
                      }}
                      style={styles.textArea}
                    />
                  </Accordion.Details>
                </Accordion.Item>
              ))}
            </Accordion>
            <ButtonType
              title="Agregar Capitulo"
              styleParentButton={{
                width: "100%",
                borderColor: "#afafaf",
              }}
              styleParentText={{
                color: "#afafaf",
              }}
              onPress={addCapter}
            />
            {isLoading && (
              <ActivityIndicator
                size="large"
                color={colorPrincipal}
                style={{ marginTop: 40 }}
              />
            )}
            <ButtonType
              title="Subir Texto"
              styleParentButton={{
                marginTop: 40,
                width: "100%",
                marginBottom: 40,
              }}
              onPress={createText}
            />
          </Center>
        </NativeBaseProvider>
      </ScrollView>
    </KeyboardAwareScrollView>
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
