import { getCookies } from "./cookies";

import {
  getBookingsQuery,
  getCurrentUserQuery,
  getLoginUserMutationQuery,
  getLogoutMutationQuery,
} from "./graphqlQueries";

import {
  BookingTypes,
  LoginResponse,
} from "./types";

const GRAPHQL_URL =
  process.env.EXPO_PUBLIC_GRAPHQL_URL_FOR_WEB;

if (!GRAPHQL_URL) {
  throw new Error(
    "EXPO_PUBLIC_GRAPHQL_URL is not defined"
  );
};

/**
 * Common GraphQL request function
 */
const graphqlRequest = async (
  request: {
    query: string;
  }
) => {
  try {
    const result = await fetch(
      GRAPHQL_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        // Web:
        // Browser manages cookies automatically.
        //
        // Native:
        // Allows credentials/cookies to participate
        // in the request.
        credentials: "include",

        body: JSON.stringify(request),
      }
    );

    if (!result.ok) {
      throw new Error(
        `HTTP Error: ${result.status}`
      );
    }

    const jsonResult =
      await result.json();

    if (jsonResult.errors) {
      console.error(
        "GraphQL errors:",
        jsonResult.errors
      );

      throw new Error(
        "GraphQL request failed"
      );
    }

    return jsonResult;
  } catch (error) {
    console.error(
      "GraphQL request failed:",
      error
    );

    throw error;
  }
};

/**
 * Login
 */
const getLoginUserMutationApi = async (
  loginId: string,
  password: string
): Promise<LoginResponse> => {
  const usersRequest = {
    query: getLoginUserMutationQuery(
      loginId,
      password
    ),
  };

  try {
    const jsonResult =
      await graphqlRequest(usersRequest);

    /**
     * Check cookies after successful login.
     *
     * This is mainly useful for debugging
     * the native cookie/session issue.
     */
    const cookies =
      await getCookies();

    console.log(
      "Cookies after login:",
      cookies
    );

    const loginResponse =
      jsonResult?.data?.isLogin;

    console.log(
      "LOGIN RESPONSE:",
      loginResponse
    );

    return loginResponse;
  } catch (error) {
    console.error(
      "Failed to login:",
      error
    );

    throw error;
  }
};

/**
 * Get currently logged-in user
 */
const getCurrentUserApi = async (): Promise<
  string | null
> => {
  const usersRequest = {
    query: getCurrentUserQuery(),
  };

  try {
    const jsonResult =
      await graphqlRequest(usersRequest);

    const currentUser =
      jsonResult?.data?.currentUser ??
      null;

    console.log(
      "CURRENT USER:",
      currentUser
    );

    return currentUser;
  } catch (error) {
    console.error(
      "Failed to get current user:",
      error
    );

    throw error;
  }
};

/**
 * Logout
 */
const getLogoutMutationApi =
  async (): Promise<boolean> => {
    const usersRequest = {
      query:
        getLogoutMutationQuery(),
    };

    try {
      const jsonResult =
        await graphqlRequest(
          usersRequest
        );

      const logoutResponse =
        jsonResult?.data?.logout;

      console.log(
        "LOGOUT RESPONSE:",
        logoutResponse
      );

      /**
       * Check cookies after logout.
       */
      const cookies =
        await getCookies();

      console.log(
        "Cookies after logout:",
        cookies
      );

      return logoutResponse;
    } catch (error) {
      console.error(
        "Failed to logout:",
        error
      );

      throw error;
    }
  };

/**
 * Get bookings
 */
const getBookingsApi = async (
  first: number,
  after: string | null
): Promise<{
  bookingsList: BookingTypes[];
  pageInfo: {
    hasNextPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
}> => {
  const bookingsRequest = {
    query: getBookingsQuery(
      first,
      after
    ),
  };

  try {
    const jsonResult =
      await graphqlRequest(
        bookingsRequest
      );

    console.log(
      "BOOKINGS RESPONSE:",
      jsonResult
    );

    const bookingsData =
      jsonResult?.data?.bookings;

    if (!bookingsData) {
      throw new Error(
        "Bookings data is missing from GraphQL response"
      );
    }

    return {
      bookingsList:
        bookingsData.edges.map(
          (edge: {
            node: BookingTypes;
            cursor: string;
          }) => edge.node
        ),

      pageInfo:
        bookingsData.pageInfo,
    };
  } catch (error) {
    console.error(
      "Failed to fetch bookings:",
      error
    );

    throw error;
  }
};

export {
  getBookingsApi,
  getCurrentUserApi,
  getLoginUserMutationApi,
  getLogoutMutationApi
};

