import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  StorageAccessFramework,
  documentDirectory,
  getInfoAsync,
  getContentUriAsync,
  readAsStringAsync,
} from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import { encode } from "utf8";
import base64 from "base-64";
import Pdf from "react-native-pdf";
// import { info } from "pdf-to-text";

export default function App() {
  const [filesShow, setFilesShow] = useState([]);

  const prueba = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
    });
    // info(result, function (err, info) {
    //   if (err) throw err;
    //   console.log(info);
    // });

    // const file = await readAsStringAsync(result.uri);

    console.log(result);
    // file.then((fileString) => console.log(fileString));
    // console.log(file);

    // const permissions =
    //   await StorageAccessFramework.requestDirectoryPermissionsAsync();
    // if (permissions.granted) {
    //   // Gets SAF URI from response
    //   const uri = permissions.directoryUri;

    //   // Gets all files inside of selected directory
    //   const files = await StorageAccessFramework.readDirectoryAsync(uri);
    //   // const files = await StorageAccessFramework.readAsStringAsync(uri);
    //   // console.log(documentDirectory)

    //   files.forEach((val) => {
    //     // setFilesShow([])
    //     // setFilesShow([...filesShow, getInfoAsync(uri) ])
    //     // const info = getContentUriAsync(await )
    //     // info.then(infoFile => {
    //     //   console.log(infoFile)
    //     // })
    //     // const info = getContentUriAsync(val)

    //     // info.then(info=> console.log(info))
    //     if (val.includes("pdf")) {
    //       console.log("pdf\n\n\n\n\n\n\n");
    //       const fileString = readAsStringAsync(val);
    //       fileString.then((content) => {
    //         console.log(content);
    //         const bytes = encode(content);
    //         const encoded = base64.encode(bytes);
    //         const decoded = base64.decode(encoded);
    //       });
    //     }
    //   });

    //   // alert(`Files inside ${uri}:\n\n${JSON.stringify(files)}`);
    //   // alert(`Files inside ${uri}:\n\n${JSON.stringify(files)}`);
    //   console.log(files);
    // }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={prueba}>
        <Text>Tocar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
