import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { StackActions, useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const Stack = createStackNavigator();

  const navto = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={SignInScreen} name="SignIn" />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15, marginBottom: 10 }}>
          <Avatar.Image
            source={require("../../assets/img/Profile.png")}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title}>Nassipkali Yernur</Title>
            <Caption style={styles.caption}>Developer</Caption>
          </View>
        </View>

        <Button
          style={styles.btnlog}
          title="Log out"
          onPress={() => navigation.navigate("SignIn")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  btnlog: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
