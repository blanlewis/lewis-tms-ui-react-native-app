import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { TextInput } from "react-native-paper";

import CustomButton from "../../components/CustomButton";
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
        setSnackbarState(
          true,
          "Login successful",
          SnackbarSeverityEnum.SUCCESS
        );

        router.replace("/");
        return;
      }

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
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#F7FAFE",
      }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 20,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Main Login Container */}
        <View
          style={{
            width: "92%",
            minHeight: 650,
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            borderWidth: 1,
            borderColor: "#E3EAF3",
            paddingHorizontal: 18,
            paddingTop: 28,
            paddingBottom: 15,

            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.06,
            shadowRadius: 8,

            elevation: 3,
          }}
        >
          {/* Lewis TMS Logo */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <Image
              source={require("../../utils/public/images/truck-image.jpg")}
              style={{
                width: 150,
                height: 100,
              }}
              resizeMode="contain"
            />
          </View>

          {/* Welcome Text */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: "700",
                color: "#172B4D",
                marginBottom: 6,
              }}
            >
              Welcome Back
            </Text>

            <Text
              style={{
                fontSize: 13,
                color: "#7A8799",
              }}
            >
              Login to your account
            </Text>
          </View>

          {/* Login ID */}
          <View
            style={{
              width: "100%",
              marginBottom: 14,
            }}
          >
            <CustomTextField
              value={loginId}
              onChangeText={setLoginId}
              label="Login ID"
              mode="outlined"
              textColor="#172B4D"
              outlineColor="#D9E3F0"
              activeOutlineColor="#1268E8"
              style={{
                backgroundColor: "#FFFFFF",
              }}
              left={
                <TextInput.Icon
                  icon="account-outline"
                  color="#718096"
                />
              }
            />
          </View>

          {/* Password */}
          <View
            style={{
              width: "100%",
              marginBottom: 18,
            }}
          >
            <CustomTextField
              value={password}
              onChangeText={setPassword}
              label="Password"
              mode="outlined"
              secureTextEntry
              textColor="#172B4D"
              outlineColor="#D9E3F0"
              activeOutlineColor="#1268E8"
              style={{
                backgroundColor: "#FFFFFF",
              }}
              left={
                <TextInput.Icon
                  icon="lock-outline"
                  color="#718096"
                />
              }
            />
          </View>

          {/* Login Button */}
          <View
            style={{
              width: "100%",
              marginTop: 2,
            }}
          >
            <CustomButton
              buttonText="Login"
              buttonTextColor="#FFFFFF"
              isButtonDisabled={
                !loginId || !password
              }
              onButtonClicked={handleLogin}
              buttonMinWidth={0}
              buttonHeight={48}
              buttonFontSize={16}
              buttonBackgroundColor="#1268E8"
              buttonBorderColor="#1268E8"
              buttonBorderRadius={7}
              buttonDisabledBackgroundColor="#D9E3F0"
              buttonDisabledTextColor="#8A98AA"
              buttonDisabledBorderColor="#D9E3F0"
            />
          </View>

          {/* Forgot Password */}
          <Text
            onPress={() => {
              console.log("Forgot Password clicked");
            }}
            style={{
              textAlign: "center",
              marginTop: 16,
              fontSize: 13,
              fontWeight: "600",
              color: "#1268E8",
            }}
          >
            Forgot Password?
          </Text>

          {/* Bottom Truck Image */}
          <View
            style={{
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <Image
              source={require("../../utils/public/images/truck-image.jpg")}
              style={{
                width: "100%",
                height: 150,
                opacity: 0.55,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginPageModal;