import { router } from "expo-router";
import { useState } from "react";
import { Image, View } from "react-native";

import CustomButton from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";
import CustomTextField from "../../components/CustomTextField";

import { useCustomHook } from "../../utils/hook";
import { SnackbarSeverityEnum } from "../../utils/types";

const LoginPageModal = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const {
    loginState,
    setSnackbarState,
  } = useCustomHook();

  const handleLogin = async () => {
    try {
      const loginResponse = await loginState(
        loginId,
        password
      );

      console.log("loginResponse:", loginResponse);

      if (loginResponse?.success) {
        // Login successful
        setSnackbarState(
          true,
          "Login successful",
          SnackbarSeverityEnum.SUCCESS
        );

        // Navigate to home
        router.replace("/");
        return;
      }

      // Login failed
      setSnackbarState(
        true,
        "Login failed: Invalid credentials",
        SnackbarSeverityEnum.ERROR
      );
    } catch (error) {
      console.error("Login error:", error);

      setSnackbarState(
        true,
        "Login failed. Please try again.",
        SnackbarSeverityEnum.ERROR
      );
    }
  };

  return (
    <CustomModal
      open={true}
      onClose={() => {}}
      modalContent={
        <View
          style={{
            alignItems: "center",
            gap: 32,
          }}
        >
          <Image
            source={require("../../utils/public/images/truck-image.jpg")}
            style={{
              width: 100,
              height: 100,
            }}
          />

          <CustomTextField
            value={loginId}
            onChangeText={setLoginId}
            label="Login ID"
          />

          <CustomTextField
            value={password}
            onChangeText={setPassword}
            label="Password"
            secureTextEntry
          />

          <CustomButton
            buttonText="Login"
            buttonTextColor="#FFFFFF"
            isButtonDisabled={!loginId || !password}
            onButtonClicked={handleLogin}
            buttonMinWidth={212}
            buttonHeight={40}
            buttonFontSize={16}
            buttonBackgroundColor="#1976D2"
            buttonBorderColor="#1976D2"
            buttonBorderRadius={4}
            buttonDisabledBackgroundColor="#E0E0E0"
            buttonDisabledTextColor="#9E9E9E"
            buttonDisabledBorderColor="#E0E0E0"
          />
        </View>
      }
    />
  );
};

export default LoginPageModal;