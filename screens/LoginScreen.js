import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SignForms from "../components/SignForms";
import LoginIllustration from "../assets/LoginIllustration";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SignForms
      navigation={navigation}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      title={`Inicia sesión`}
      caption={`Continua con tu lectura`}
      Illustration={LoginIllustration}
      bottomText={`¿Todavia no tienes cuenta?`}
      touchableText={`Crea tu cuenta`}
      goTo={() => navigation.navigate("Register")}
    />
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
