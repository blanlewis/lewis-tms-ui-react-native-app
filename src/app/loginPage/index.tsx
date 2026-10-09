import { View } from "react-native";
import LoginPageLayout from "../../components/LoginPageLayout";

export default function LoginPage() {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <LoginPageLayout />
    </View>
  );
}