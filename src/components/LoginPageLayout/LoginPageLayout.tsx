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

import CustomButton from "../CustomButton";
import CustomTextField from "../CustomTextField";

import { useCustomHook } from "../../utils/hook";
import { SnackbarSeverityEnum } from "../../utils/types";

const LoginPageLayout = () => { 
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
        width: "100%",
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
        }} 
        keyboardShouldPersistTaps="handled" 
        showsVerticalScrollIndicator={false} 
      > 
        {/* Main Login Container */} 
        <View 
          style={{ 
            flex: 1,
            width: "100%", 
            backgroundColor: "#F0F6FD", 
            borderRadius: 18, 
            borderWidth: 1, 
            borderColor: "#E3EAF3", 
            paddingHorizontal: 18, 
            paddingTop: 28, 
            paddingBottom: 15, 

            // Vertically distribute the 3 sections (Logo, Form Container, Bottom Image)
            justifyContent: "space-between", 

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
          {/* 1. Lewis TMS Logo Component */} 
          <View 
            style={{ 
              alignItems: "center", 
            }} 
          > 
            <Image 
              source={require("../../utils/public/images/lewis-tms-image.png")} 
              style={{ 
                width: "100%", 
                height: 200,
              }} 
              resizeMode="contain" 
            /> 
          </View> 

          {/* 2. Middle Form Container */} 
          <View style={{ width: "100%" }}>
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
                theme={{ roundness: 8 }} 
                style={{ 
                  backgroundColor: "#FFFFFF", 
                  borderRadius: 8, 
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
                theme={{ roundness: 8 }} 
                style={{ 
                  backgroundColor: "#FFFFFF", 
                  borderRadius: 8, 
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
                buttonBorderRadius={8} 
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
          </View>

          {/* 3. Bottom Image Component */} 
          <View  
            style={{  
              marginHorizontal: -18,        
              marginBottom: -15,            
              alignSelf: "stretch",
              overflow: "hidden",            
              borderBottomLeftRadius: 18, 
              borderBottomRightRadius: 18, 
            }}  
          >  
            <Image  
              source={require("../../utils/public/images/lewis-tms-image5.png")}  
              style={{  
                width: "100%",  
                height: 350,  
                opacity: 0.55,  
              }}  
              resizeMode="cover" 
            />  
          </View> 
        </View> 
      </ScrollView> 
    </KeyboardAvoidingView> 
  ); 
}; 

export default LoginPageLayout;