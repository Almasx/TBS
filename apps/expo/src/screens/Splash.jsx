import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "react-native";
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
      <Image
        source={require("../../assets/img/Splash.png")}
        style={{ width: 256, height: 94 }}
      />
    </View>
  );
};

export default Splash;
