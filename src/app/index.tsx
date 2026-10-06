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

  console.log("loginId:", loginId);
  console.log("isSessionChecked:", isSessionChecked);

  // Still checking whether the user is logged in
  if (!isSessionChecked) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Session check is complete and user is NOT logged in
  if (!loginId) {
    return <Redirect href="/loginPage" />;
  }

  return <Redirect href="/(main)/dossierPlanning" />;
}