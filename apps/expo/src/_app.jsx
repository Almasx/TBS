import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationBar from "./components/NavigationBar";
import LoginScreen from "./screens/LoginScreen";
import { View, Text } from "react-native";
// import { TRPCProvider } from "./utils/api";

import home from "./screens/HomeScreen";
export const App = () => {
  return <LoginScreen />;
};
