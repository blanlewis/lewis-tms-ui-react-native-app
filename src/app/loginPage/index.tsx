import { View } from "react-native";
import LoginPageLayout from "../../components/LoginPageLayout";

export default function LoginPage() {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginPageLayout />
    </View>
  );
}