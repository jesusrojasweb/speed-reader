import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import {
  backgroundDefault,
  colorPrincipal,
  colorText,
  colorTitle,
  colorWords,
  fontBold,
  fontRegular,
  fontSemiBold,
  fontTitle,
  navigationOptions,
} from "./styles/variables";
import { Box, Center, Fab, NativeBaseProvider } from "native-base";
import ControlReading from "../components/ControlReading";
import { auth, db } from "../firebase";

let counter = 0;

const ReadingScreen = ({ navigation, route }) => {
  const {
    name,
    author,
    text,
    chapters,
    isFile,
    textId,
    isFavorite,
    actualChapter,
  } = route.params;

  const words = route?.params?.words || 1;
  const ppm = route?.params?.ppm || 1;

  const textSize = words > 1 ? 54 / words : 36;

  let interval;

  const [isPlay, setIsPlay] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(actualChapter);
  const [chaptersReading, setChaptersReading] = useState(chapters);
  const [readingText, setReadingText] = useState("");
  const [renders, setRenders] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      ...navigationOptions,
      title: name,
      headerLeft: () => {
        if (text !== "") {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Config Screen", {
                  ...route.params,
                  id: textId,
                });
              }}
              style={{
                marginLeft: 20,
              }}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color={colorTitle}
                // style={{ paddingHorizontal: 2 }}
              />
            </TouchableOpacity>
          );
        }
      },
    });
    counter = 0;
  }, [navigation, route]);

  useEffect(() => {
    if (renders === 0) {
      divideWords();
    }
    const speed = (words * 60000) / ppm;

    if (chaptersReading !== []) {
      if (counter < chaptersReading[currentChapter].content.length) {
        showWords();
      }
      interval = setInterval(() => {
        if (isPlay) {
          showWords();
        }
      }, speed);
    }
    setRenders(renders + 1);
    return () => clearInterval(interval);
  }, [route, navigation, isPlay]);

  const showWords = (isIncrement = true, currentReading = currentChapter) => {
    let wordsToShow = "";

    const readingChapter = chaptersReading[currentReading].content;

    if (!isIncrement) {
      counter -= words;
    }

    for (let i = 0; i < words; i++) {
      wordsToShow += readingChapter[counter + i] + " ";
    }

    setReadingText(wordsToShow);

    if (isIncrement) {
      counter += words;
    }

    if (counter >= readingChapter.length) {
      const nextChapter = currentChapter + 1;
      if (nextChapter >= chaptersReading.length) {
        clearInterval(interval);
        uploadReading(true);
      } else {
        setCurrentChapter(nextChapter);
        counter = 0;
      }
      setIsPlay(!isPlay);
    }
  };

  const handleReading = () => {
    const readingChapter = chaptersReading[currentChapter].content;
    if (counter < readingChapter.length) {
      setIsPlay(!isPlay);
      if (!isPlay) {
        uploadReading();
      }
    }
  };

  const backStep = () => {
    const decrement = counter - words;

    if (decrement >= 0) {
      showWords(false);
    }
  };

  const folowStep = () => {
    showWords();
  };
  const backChapter = () => {
    const decrement = currentChapter - 1;

    if (decrement >= 0) {
      setCurrentChapter(decrement);
      counter = 0;
      showWords(true, decrement);
      uploadReading();
    }
  };

  const followChapter = () => {
    const increment = currentChapter + 1;

    if (increment < chaptersReading.length) {
      setCurrentChapter(increment);
      counter = 0;
      showWords(true, increment);
      uploadReading();
    }
  };

  const divideWords = () => {
    let chaptersControl = [];
    chapters.forEach(({ content, id, name }, index) => {
      const divided = content?.split(" ") || content;
      chaptersControl[index] = { id, name, content: divided };
      setChaptersReading(chaptersControl);
    });
  };

  const uploadReading = async (isCompleted = false) => {
    await db
      .collection("texts")
      .doc(auth.currentUser.uid)
      .collection("uploaded")
      .doc(textId)
      .set({
        name,
        chapters,
        isFile,
        author: author,
        isFavorite,
        actualChapter: currentChapter,
        author,
        isCompleted,
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chapter}>{chapters[currentChapter].name}</Text>
      <View style={styles.reader}>
        <Text style={{ ...styles.text, fontSize: textSize }}>
          {readingText}
        </Text>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.controls}>
          <ControlReading
            icon="backward"
            text="Cap Ant"
            onPress={backChapter}
          />
          <View>
            <View style={styles.controlsViews}>
              <ControlReading
                icon="step-backward"
                style={{ marginRight: 10 }}
                onPress={backStep}
              />
              <ControlReading icon="step-forward" onPress={folowStep} />
            </View>
            <Text
              style={{
                color: colorText,
                fontFamily: fontRegular,
                fontSize: 12,
                textAlign: "center",
              }}
            >
              Vistas
            </Text>
          </View>
          <ControlReading
            icon="forward"
            text="Sig Cap"
            onPress={followChapter}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleReading}>
            <FontAwesome5
              name={isPlay ? "pause" : "play"}
              size={20}
              color={"white"}
              style={{ paddingHorizontal: 4, paddingVertical: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    height: "100%",
    justifyContent: "space-between",
  },
  chapter: {
    textAlign: "center",
    fontFamily: fontBold,
    fontSize: 36,
    color: colorTitle,
    marginTop: 20,
  },
  reader: {
    backgroundColor: colorWords,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  text: {
    fontFamily: fontTitle,
    color: colorTitle,
    textAlign: "center",
  },
  button: {
    backgroundColor: colorPrincipal,
    borderRadius: 40,
    padding: 20,
    marginTop: -30,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
  },
  controlsViews: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
