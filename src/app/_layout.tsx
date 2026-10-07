import { CustomHookProvider } from "@/utils/context";
import IntlProviderWrapper from "@/utils/languageTranslation/IntlProvider";
import { LanguageProvider } from "@/utils/languageTranslation/LanguageContext";
import ReduxProvider from "@/utils/redux/ReduxHookProvider";

import {
  DefaultTheme,
  Stack,
  ThemeProvider,
} from "expo-router";

import {
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#1268E8",
    onPrimary: "#FFFFFF",
    background: "#F8FBFF",
    surface: "#FFFFFF",
    surfaceVariant: "#F5F8FC",
    onBackground: "#172B4D",
    onSurface: "#172B4D",
    outline: "#D9E3F0",
    outlineVariant: "#E5ECF5",
    error: "#D32F2F",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <LanguageProvider>
        <IntlProviderWrapper>
          <CustomHookProvider>
            <ReduxProvider>
              <PaperProvider theme={lightTheme}>
                <AnimatedSplashOverlay />

                <Stack>
                  <Stack.Screen
                    name="index"
                    options={{
                      headerShown: false,
                    }}
                  />

                  <Stack.Screen
                    name="loginPage"
                    options={{
                      headerShown: false,
                    }}
                  />

                  <Stack.Screen
                    name="(main)"
                    options={{
                      headerShown: false,
                    }}
                  />
                </Stack>
              </PaperProvider>
            </ReduxProvider>
          </CustomHookProvider>
        </IntlProviderWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}