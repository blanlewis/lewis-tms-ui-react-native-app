
import { Platform } from "react-native";

const getCookies = async () => {
  // The browser manages cookies on web.
  if (Platform.OS === "web") {
    console.log("Web: browser manages cookies.");
    return null;
  }

  try {
    const { default: CookieManager } = await import(
      "@preeternal/react-native-cookie-manager"
    );

    const GRAPHQL_URL =
      process.env.EXPO_PUBLIC_GRAPHQL_URL_FOR_NATIVE;

    if (!GRAPHQL_URL) {
      throw new Error(
        "EXPO_PUBLIC_GRAPHQL_URL_FOR_NATIVE is not defined"
      );
    }

    const cookies = await CookieManager.get(GRAPHQL_URL);

    // Don't log cookie contents; they may contain session credentials.
    console.log("Native cookie lookup completed.");

    return cookies;
  } catch (error) {
    console.error("Failed to get native cookies:", error);
    return null;
  }
};

export { getCookies };
