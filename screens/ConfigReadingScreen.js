import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";
import ImageCard from "../components/ImageCard";
import ButtonType from "../components/ButtonType";
import IncrementInput from "../components/IncrementInput";
import { AntDesign } from "@expo/vector-icons";
import {
  backgroundDefault,
  fontSemiBold,
  colorText,
  colorTitle,
  fontRegular,
  fontMedium,
} from "./styles/variables";

const ConfigReadingScreen = ({ navigation, route }) => {
  const isFile = route?.params?.isFile || false;
  const name = route?.params?.name || "Nombre";
  const author = route?.params?.author || "Autor";
  const text = route?.params?.text || "Texto";

  const lengthText = text.split(" ").length;

  const [words, setWords] = useState(1);
  const [ppm, setPpm] = useState(200);

  const divided = lengthText / ppm;
  const estimated = divided.toFixed(2);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Configuracion de lectura",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("List");
          }}
          style={{
            marginLeft: 0,
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={colorTitle}
            // style={{ paddingHorizontal: 2 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageCard isFile={isFile} width={151} height={204} />
      </View>
      <View style={styles.options}>
        <ScrollView>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.author}>{author}</Text>

          <IncrementInput
            label="Palabras por vista:"
            value={words}
            change={setWords}
            min={1}
            amount={1}
            max={3}
          />
          <IncrementInput
            label="Palabras por minuto:"
            value={ppm}
            change={setPpm}
            min={100}
            amount={50}
          />

          <Text style={styles.estimated}>
            Tiempo estimado: {estimated} {estimated > 1 ? "minutos" : "minuto"}
          </Text>

          <ButtonType
            title="Comenzar Lectura"
            type="primary"
            onPress={() =>
              navigation.navigate("Read", {
                name,
                author,
                text,
                words,
                ppm,
              })
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ConfigReadingScreen;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    paddingTop: 30,
    height: "100%",
    paddingHorizontal: 0,
  },
  imageContainer: {
    alignItems: "center",
  },
  options: {
    elevation: 10,
    // border: 1,
    borderColor: "black",
    // width: "100%",
    width: Dimensions.get("window").width + 20,
    marginLeft: -10,
    height: "54%",
    padding: 30,
    marginTop: 30,
  },
  name: {
    fontFamily: fontSemiBold,
    color: colorTitle,
    fontSize: 18,
  },
  author: {
    fontFamily: fontMedium,
    color: colorText,
    marginBottom: 20,
  },
  estimated: {
    marginBottom: 20,
    fontFamily: fontRegular,
    color: colorText,
  },
});
