import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import ButtonType from "./ButtonType";
import {
  backgroundDefault,
  colorText,
  fontTitle,
  colorPrincipal,
  fontRegular,
} from "../screens/styles/variables";
import Inputs from "./Inputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignForms = ({
  navigation,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  title,
  caption,
  Illustration,
  bottomText,
  touchableText,
  goTo,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const signUp = () => {
    setIsLoading(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          // contentContainerStyle={styles.container}
          scrollEnabled
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.illustration}>
            <Illustration />
          </View>
          <View>
            {name !== undefined && (
              <Inputs
                placeholder="Nombre"
                type="text"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            )}
            <Inputs
              placeholder="Email"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Inputs
              placeholder="Contraseña"
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>

          {isLoading && (
            <ActivityIndicator size="large" color={colorPrincipal} />
          )}

          <ButtonType title={"Crear Cuenta"} />

          <View style={styles.bottonTextContainer}>
            <Text style={styles.bottomText}>{bottomText}</Text>
            <TouchableOpacity onPress={goTo} style={styles.touchable}>
              <Text style={styles.touchableText}>{touchableText}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignForms;

const styles = StyleSheet.create({
  container: {
    ...backgroundDefault,
    paddingVertical: 40,
    height: "100%",
  },
  title: {
    fontFamily: fontTitle,
    fontSize: 24,
  },
  caption: {
    fontFamily: fontTitle,
    color: colorText,
  },
  illustration: {
    height: 220,
    marginVertical: 20,
  },
  bottonTextContainer: {
    flexDirection: "row",
    marginTop: 17,
  },
  bottomText: {
    fontFamily: fontRegular,
    color: colorText,
  },
  touchable: {
    marginLeft: 10,
  },
  touchableText: {
    color: colorPrincipal,
    fontFamily: fontRegular,
  },
});
