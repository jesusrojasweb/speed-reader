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
let counter = 0;

const ReadingScreen = ({ navigation, route }) => {
  const name = route?.params?.name || "Lectura";
  const text = route?.params?.text || "";
  const words = route?.params?.words || 1;
  const ppm = route?.params?.ppm || 1;

  const textArray = text.split(" ");

  const textSize = words > 1 ? 54 / words : 36;

  let interval;

  const [isPlay, setIsPlay] = useState(false);
  const [readingText, setReadingText] = useState("");

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
    const speed = (words * 60000) / ppm;

    if (text !== "") {
      if (counter < textArray.length) {
        showWords();
      }
      interval = setInterval(() => {
        if (isPlay) {
          showWords();
        }
      }, speed);
    }

    return () => clearInterval(interval);
  }, [route, navigation, isPlay]);

  const showWords = (isIncrement = true) => {
    let wordsToShow = "";

    for (let i = 0; i < words; i++) {
      wordsToShow += textArray[counter + i] + " ";
    }
    console.log("wordsToShow", wordsToShow);

    setReadingText(wordsToShow);

    if (isIncrement) {
      counter += words;
    } else {
      counter -= words;
    }

    if (counter >= textArray.length) {
      clearInterval(interval);
      setIsPlay(!isPlay);
    }
  };

  const handleReading = () => {
    if (counter < textArray.length) {
      setIsPlay(!isPlay);
    }
  };

  const backStep = () => {
    const decrement = counter - 1;

    if (decrement >= 0) {
      showWords(false);
    }
  };

  const folowStep = () => {
    showWords();
    console.log("folow");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chapter}>Capitulo 1</Text>
      <View style={styles.reader}>
        <Text style={{ ...styles.text, fontSize: textSize }}>
          {readingText}
        </Text>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.controls}>
          <ControlReading icon="backward" text="Cap Ant" />
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
          <ControlReading icon="forward" text="Sig Cap" />
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
