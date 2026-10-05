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

const GRAPHQL_URL = process.env.EXPO_PUBLIC_GRAPHQL_URL;
if (!GRAPHQL_URL) {
  throw new Error("EXPO_PUBLIC_GRAPHQL_URL is not defined");
}

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
    const result = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(usersRequest),
    });

    if (!result.ok) {
      throw new Error(
        `HTTP Error: ${result.status}`
      );
    }

    const jsonResult = await result.json();

    return jsonResult.data.isLogin;
  } catch (error) {
    console.error(
      "Failed to login:",
      error
    );

    throw error;
  }
};

const getCurrentUserApi = async (): Promise<
  string | null
> => {
  const usersRequest = {
    query: getCurrentUserQuery(),
  };

  try {
    const result = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(usersRequest),
    });

    if (!result.ok) {
      throw new Error(
        `HTTP Error: ${result.status}`
      );
    }

    const jsonResult = await result.json();

    return jsonResult.data.currentUser;
  } catch (error) {
    console.error(
      "Failed to get current user:",
      error
    );

    throw error;
  }
};

const getLogoutMutationApi = async (): Promise<boolean> => {
  const usersRequest = {
    query: getLogoutMutationQuery(),
  };

  try {
    const result = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(usersRequest),
    });

    if (!result.ok) {
      throw new Error(
        `HTTP Error: ${result.status}`
      );
    }

    const jsonResult = await result.json();

    return jsonResult.data.logout;
  } catch (error) {
    console.error(
      "Failed to logout:",
      error
    );

    throw error;
  }
};

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
    const result = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(bookingsRequest),
    });

    if (!result.ok) {
      throw new Error(
        `HTTP Error: ${result.status}`
      );
    }

    const jsonResult =
      await result.json();

    console.log(
      "BOOKINGS RESPONSE:",
      jsonResult
    );

    const bookingsData =
      jsonResult.data.bookings;

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
  getBookingsApi, getCurrentUserApi, getLoginUserMutationApi, getLogoutMutationApi
};

