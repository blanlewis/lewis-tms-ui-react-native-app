import { useRouter } from "expo-router";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import type { CustomAppbarProps } from "../CustomAppbar";
import CustomAppbar from "../CustomAppbar";
import CustomDrawer from "../CustomDrawer";

import {
  setReduxHookPageState
} from "@/utils/redux/reduxHookPageSlice";

import type { RootState } from "@/utils/redux/store";

import { ActivePageEnum } from "@/utils/redux/types";

const HomePageLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    isMenuDrawerOpen,
    activePage,
  } = useSelector(
    (state: RootState) => state.reduxHookPage
  );

  const handlePageNavigation = (page: ActivePageEnum) => {
    dispatch(
      setReduxHookPageState({
        activePage: page,
        isMenuDrawerOpen: false,
      })
    );
    // localStorage.setItem("activePage", page);
    router.push(page);
  };

  const appTopBar: CustomAppbarProps = {
    appBarLeftIconAction: {
      icon: "menu",
      onPress: () => {
        dispatch(
          setReduxHookPageState({
            isMenuDrawerOpen: !isMenuDrawerOpen,
          })
        );
      },
    },

    appBarContent: {
      title: "Lewis TMS",
    },

    appBarAction: [
      {
        icon: "calendar",
        onPress: () => console.log("Calendar clicked"),
      },
      {
        icon: "magnify",
        onPress: () => console.log("Search clicked"),
      },
    ],
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <CustomAppbar
        appBarLeftIconAction={
          appTopBar.appBarLeftIconAction
        }
        appBarContent={appTopBar.appBarContent}
        appBarAction={appTopBar.appBarAction}
      />

      <CustomDrawer
        drawerSection={{
          title: "TMS Apps",
          display: isMenuDrawerOpen ? "flex" : "none",
        }}
        drawerItemList={[
          {
            label: "Dossier Planning",
            active:
              activePage ===
              ActivePageEnum.DOSSIER_PLANNING_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.DOSSIER_PLANNING_PAGE);
            },
          },

          {
            label: "Reports",
            active:
              activePage ===
              ActivePageEnum.REPORTS_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.REPORTS_PAGE);
            },
          },

          {
            label: "Fleet View",
            active:
              activePage ===
              ActivePageEnum.FLEET_VIEW_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.FLEET_VIEW_PAGE);
            },
          },

          {
            label: "Route Estimation",
            active:
              activePage ===
              ActivePageEnum.ROUTE_ESTIMATION_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.ROUTE_ESTIMATION_PAGE);
            },
          },

          {
            label: "Resource Planning",
            active:
              activePage ===
              ActivePageEnum.RESOURCE_PLANNING_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.RESOURCE_PLANNING_PAGE);
            },
          },

          {
            label: "Driver app",
            active:
              activePage ===
              ActivePageEnum.DRIVER_APP_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.DRIVER_APP_PAGE);
            },
          },

          {
            label: "Booking Creation",
            active:
              activePage ===
              ActivePageEnum.BOOKING_CREATION_PAGE,
            onPress: () => {
              handlePageNavigation(ActivePageEnum.BOOKING_CREATION_PAGE);
            },
          },
        ]}
      />
    </View>
  );
};

export default HomePageLayout;