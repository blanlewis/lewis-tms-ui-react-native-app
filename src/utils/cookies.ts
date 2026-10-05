import { Platform } from "react-native";

const getCookies = async () => {
  /**
   * Web
   *
   * Cookies are managed by the browser.
   */
  if (Platform.OS === "web") {
    console.log(
      "Running on Web - browser manages cookies."
    );

    return null;
  }

  /**
   * Android / iOS
   *
   * Dynamically import the native cookie
   * package so Expo Web doesn't try to load it.
   */
  try {
    const {
      default: CookieManager,
    } = await import(
      "@react-native-community/cookies"
    );

    const GRAPHQL_URL =
      process.env.EXPO_PUBLIC_GRAPHQL_URL;

    if (!GRAPHQL_URL) {
      throw new Error(
        "EXPO_PUBLIC_GRAPHQL_URL is not defined"
      );
    }

    const cookies =
      await CookieManager.get(
        GRAPHQL_URL
      );

    console.log(
      "Native cookies:",
      cookies
    );

    return cookies;
  } catch (error) {
    console.error(
      "Failed to get native cookies:",
      error
    );

    return null;
  }
};

export {
    getCookies
};
