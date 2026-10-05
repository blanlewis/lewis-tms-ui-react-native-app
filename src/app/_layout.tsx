import { CustomHookProvider } from "@/utils/context";
import IntlProviderWrapper from "@/utils/languageTranslation/IntlProvider";
import { LanguageProvider } from "@/utils/languageTranslation/LanguageContext";
import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider,
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { PaperProvider } from 'react-native-paper';

import { AnimatedSplashOverlay } from "@/components/animated-icon";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <LanguageProvider>
        <IntlProviderWrapper>
          <CustomHookProvider>
            <PaperProvider>
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
              </Stack>
          </PaperProvider>
          </CustomHookProvider>
        </IntlProviderWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}