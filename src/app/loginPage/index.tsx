import { View } from "react-native";
import LoginPageModal from "../../components/LoginPageModal";

export default function LoginPage() {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginPageModal />
    </View>
  );
}