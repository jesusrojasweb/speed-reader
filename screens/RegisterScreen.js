import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import BookIllustration from "../assets/BookIllustration";
import SignForms from "../components/SignForms";

import { auth } from "../firebase";
import { useAuth } from "../hooks/useAuth";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useAuth(navigation);

  const signUp = () => {
    setIsLoading(true);

    if (name !== "" && email.trim() !== "" && password !== "") {
      auth
        .createUserWithEmailAndPassword(email.trim(), password)
        .then((authUser) => {
          authUser.user.updateProfile({
            displayName: name.trim(),
            photoURL:
              "https://secure.gravatar.com/avatar/4a173bccee235e94b623d6abd2661076?s=26&d=mm",
          });
        });
    } else {
      alert("Todos los campos son requeridos");
    }
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
      buttonText={"Crear Cuenta"}
      signFunction={signUp}
    />
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
