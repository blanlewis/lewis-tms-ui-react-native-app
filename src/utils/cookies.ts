
import { Platform } from "react-native";

const getCookies = async () => {
  if (Platform.OS === "web") {
    console.log("Web: browser manages cookies.");
    return null;
  }

  try {
    const { default: CookieManager } = await import(
      "@preeternal/react-native-cookie-manager"
    );

    const graphqlUrl =
      process.env.EXPO_PUBLIC_GRAPHQL_URL_FOR_NATIVE;

    if (!graphqlUrl) {
      throw new Error(
        "EXPO_PUBLIC_GRAPHQL_URL_FOR_NATIVE is not defined"
      );
    }

    if (!CookieManager || typeof CookieManager.get !== "function") {
      throw new Error("CookieManager.get is unavailable.");
    }

    return await CookieManager.get(graphqlUrl);
  } catch (error) {
    console.error("Failed to get native cookies:", error);
    return null;
  }
};

export { getCookies };