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

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <LanguageProvider>
        <IntlProviderWrapper>
          <CustomHookProvider>
            <ReduxProvider>
              <PaperProvider theme={MD3LightTheme}>
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
            </ReduxProvider>
          </CustomHookProvider>
        </IntlProviderWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}