import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

import { CustomHookContext } from "./context";

import {
    BookingTabsDataEnum,
    BookingTypes,
    CustomHookActionEnum,
    CustomHookState,
    SnackbarSeverityEnum,
} from "./types";

import {
    getBookingsApi,
    getCurrentUserApi,
    getLoginUserMutationApi,
    getLogoutMutationApi,
} from "./service";

const useCustomHook = () => {
  const context = useContext(CustomHookContext);

  if (!context) {
    throw new Error(
      "useCustomHook must be used within a CustomHookProvider"
    );
  }

  const { state, dispatch } = context;

  const setCustomHookState = (
    customHookState: Partial<CustomHookState>
  ) => {
    dispatch({
      type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA,
      payload: customHookState,
    });
  };

  const loginState = async (
    loginId: string,
    password: string
  ) => {
    setIsLoadingState(true);

    try {
      const loginResponse =
        await getLoginUserMutationApi(
          loginId,
          password
        );

      if (loginResponse?.success) {
        const storedData =
          await AsyncStorage.getItem(
            `localStorage_${loginResponse.loginId}`
          );

        const parsedStoredData = storedData
          ? JSON.parse(storedData)
          : null;

        setCustomHookState({
          loginId: loginResponse.loginId,

          ...(parsedStoredData?.pageLayout
            ? {
                pageLayout: {
                  ...state.pageLayout,
                  ...parsedStoredData.pageLayout,
                },
              }
            : {}),
        });

        setSnackbarState(
          true,
          "Login successful",
          SnackbarSeverityEnum.SUCCESS
        );
      } else {
        setSnackbarState(
          true,
          "Login failed: Invalid credentials",
          SnackbarSeverityEnum.ERROR
        );
      }

      return loginResponse;
    } catch (error) {
      setSnackbarState(
        true,
        "Login failed. Please try again.",
        SnackbarSeverityEnum.ERROR
      );

      console.error("Login failed:", error);

      throw error;
    } finally {
      setIsLoadingState(false);
    }
  };

  const getCurrentUser = async () => {
    setIsLoadingState(true);

    try {
      const currentUser =
        await getCurrentUserApi();

      if (currentUser) {
        const storedData =
          await AsyncStorage.getItem(
            `localStorage_${currentUser}`
          );

        const parsedStoredData = storedData
          ? JSON.parse(storedData)
          : null;

        setCustomHookState({
          loginId: currentUser,

          ...(parsedStoredData?.pageLayout
            ? {
                pageLayout: {
                  ...state.pageLayout,
                  ...parsedStoredData.pageLayout,
                },
              }
            : {}),
        });
      }

      return currentUser;
    } catch (error) {
      console.error(
        "Failed to get current user:",
        error
      );

      throw error;
    } finally {
      setCustomHookState({
        isSessionChecked: true,
      });

      setIsLoadingState(false);
    }
  };

  const logoutState = async () => {
    setIsLoadingState(true);

    try {
      const logoutResponse =
        await getLogoutMutationApi();

      if (!logoutResponse) {
        setCustomHookState({
          loginId: "",
        });

        setSnackbarState(
          true,
          "Logout successful",
          SnackbarSeverityEnum.SUCCESS
        );
      }

      return logoutResponse;
    } catch (error) {
      console.error("Logout failed:", error);

      setSnackbarState(
        true,
        "Logout failed. Please try again.",
        SnackbarSeverityEnum.ERROR
      );

      throw error;
    } finally {
      setIsLoadingState(false);
    }
  };

  const setIsLoadingState = (
    isLoading: boolean
  ) => {
    setCustomHookState({
      isLoading,
    });
  };

  const setSnackbarState = (
    open: boolean,
    message: string,
    severity: SnackbarSeverityEnum
  ) => {
    setCustomHookState({
      snackbar: {
        open,
        message,
        severity,
      },
    });
  };

  const setPageLayout = async (
    pageLayout: Partial<
      CustomHookState["pageLayout"]
    >
  ) => {
    const updatedPageLayout = {
      ...state.pageLayout,
      ...pageLayout,
    };

    setCustomHookState({
      pageLayout: updatedPageLayout,
    });

    if (state.loginId) {
      await AsyncStorage.setItem(
        `localStorage_${state.loginId}`,
        JSON.stringify({
          loginId: state.loginId,
          pageLayout: updatedPageLayout,
        })
      );
    }
  };

  const setActiveBookingTab = (
    tab: BookingTabsDataEnum
  ) => {
    setCustomHookState({
      activeBookingTab: tab,
    });
  };

  const setSelectedBookings = (
    selectedBookings: number[]
  ) => {
    setCustomHookState({
      selectedBookings,
    });
  };

  const setAnalyseOnMapBookingId = (
    bookingId: number | null,
    source: {
      lat: number | null;
      long: number | null;
    },
    destination: {
      lat: number | null;
      long: number | null;
    }
  ) => {
    setCustomHookState({
      analyseOnMapBookingId: {
        bookingId,
        source,
        destination,
      },
    });
  };

  const setBookings = (
    bookingsList: BookingTypes[],
    pageInfo: {
      hasNextPage: boolean;
      startCursor: string | null;
      endCursor: string | null;
    },
    isFirstPage: boolean
  ) => {
    setCustomHookState({
      bookings: {
        bookingsList: isFirstPage
          ? bookingsList
          : [
              ...state.bookings.bookingsList,
              ...bookingsList,
            ],

        pageInfo,
      },
    });
  };

  const fetchBookings = async (
    first: number,
    after: string | null
  ) => {
    try {
      const bookingsResponse =
        await getBookingsApi(
          first,
          after
        );

      setBookings(
        bookingsResponse.bookingsList,
        bookingsResponse.pageInfo,
        after === null
      );

      return bookingsResponse;
    } catch (error) {
      console.error(
        "Failed to fetch bookings:",
        error
      );

      throw error;
    }
  };

  return {
    ...state,

    setCustomHookState,
    loginState,
    getCurrentUser,
    logoutState,
    setIsLoadingState,
    setSnackbarState,
    setPageLayout,
    setActiveBookingTab,
    setSelectedBookings,
    setAnalyseOnMapBookingId,
    setBookings,
    fetchBookings,
  };
};

export { useCustomHook };

