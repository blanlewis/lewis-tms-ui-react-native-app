import { Redirect } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { useCustomHook } from "../utils/hook";

export default function HomeScreen() {
  const {
    loginId,
    isSessionChecked,
    getCurrentUser,
  } = useCustomHook();

  useEffect(() => {
    getCurrentUser();
  }, []);

  // Still checking session
  if (!isSessionChecked) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          size="large"
        />
      </View>
    );
  }

  // Not logged in
  console.log("loginId:", loginId);
  console.log("isSessionChecked:", isSessionChecked);
  console.log("!loginId:", !loginId);
  if (!loginId) {
    return <Redirect href="/loginPage" />;
  }

  // Logged in
  return <View style={{ width: "100%", height: "100%" }} />;
}