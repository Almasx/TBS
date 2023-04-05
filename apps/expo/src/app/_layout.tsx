import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import Constants from "expo-constants";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TRPCProvider } from "../utils/api";
import {Text} from "react-native"
import { tokenCache } from "../utils/cache";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >

      <SignedIn>
      <TRPCProvider>
      <SafeAreaProvider>
        {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#020202",
            },
          }}
        />
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
      </SignedIn>
      <SignedOut><Text>lool</Text></SignedOut>
    </ClerkProvider>
    
  );
};

export default RootLayout;
