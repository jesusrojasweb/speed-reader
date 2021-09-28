import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import BookIllustration from "../assets/BookIllustration";
import SignForms from "../components/SignForms";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUp = () => {
    setIsLoading(true);
  };

  return (
    <SignForms
      navigation={navigation}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      title={`Crea tu Cuenta`}
      caption={`Comienza a leer con rapidez`}
      Illustration={BookIllustration}
      bottomText={`¿Ya tienes una cuenta?`}
      touchableText={`Iniciar Sesión`}
      goTo={() => navigation.navigate("Login")}
    />
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
