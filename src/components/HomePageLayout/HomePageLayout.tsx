import { useCustomHook } from "@/utils/hook";
import {
  setReduxHookPageState
} from "@/utils/redux/reduxHookPageSlice";
import type { RootState } from "@/utils/redux/store";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { CustomAppbarProps } from "../CustomAppbar";
import CustomAppbar from "../CustomAppbar";
import CustomBottomNavigation from "../CustomBottomNavigation";
import CustomDrawer from "../CustomDrawer";

const HomePageLayout = () => {
  const dispatch = useDispatch();
  const { isMenuDrawerOpen } = useSelector(
    (state: RootState) => state.reduxHookPage
  );
  const { logoutState } = useCustomHook();

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
        flex: 1,
      }}
    >
    {/* Drawer */}
      {isMenuDrawerOpen && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1000,
            elevation: 10,
          }}
        >
          <CustomDrawer
            drawerHeaderSection={{
              title: "Exit",
              icon: "arrow-left",
              onPress: () => {
                dispatch(
                  setReduxHookPageState({
                    isMenuDrawerOpen: false,
                  })
                );
              },
            }}
            drawerItemList={[
              {
                label: "Profile",
                icon: "account",
                active: false,
                onPress: () => {
                  console.log("Profile clicked");
                },
              },
              {
                label: "Company",
                icon: "office-building",
                active: false,
                onPress: () => {
                  console.log("Company clicked");
                },
              },
              {
                label: "Department",
                icon: "domain",
                active: false,
                onPress: () => {
                  console.log("Department clicked");
                },
              },
            ]}
            drawerFooterSection={{
              title: "Logout",
              icon: "logout",
              onPress: () => {
                logoutState();
              },
            }}
          />
        </View>
      )}
      {/* App Bar */}
      <CustomAppbar
        appBarLeftIconAction={appTopBar.appBarLeftIconAction}
        appBarContent={appTopBar.appBarContent}
        appBarAction={appTopBar.appBarAction}
      />
      {/* Bottom Navigation */}
      <CustomBottomNavigation />
    </View>
  );
};

export default HomePageLayout;