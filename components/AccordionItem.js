import { Accordion, TextArea } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colorText, fontRegular } from "../screens/styles/variables";
import Inputs from "./Inputs";

const AccordionItem = ({ id, name, content, editChapter }) => {
  return (
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
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
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
