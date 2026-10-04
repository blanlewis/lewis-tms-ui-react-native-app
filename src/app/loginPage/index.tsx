// app/loginPage/index.tsx

import { Text, View } from "react-native";

export default function LoginPage() {
  console.log("Rendering Login Page");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Login Page</Text>
    </View>
  );
}