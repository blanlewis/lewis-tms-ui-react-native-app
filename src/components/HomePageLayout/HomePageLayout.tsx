import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import type { CustomAppbarProps } from "../CustomAppbar";
import CustomAppbar from "../CustomAppbar";
import CustomDrawer from "../CustomDrawer";

import {
  setReduxHookPageState
} from "@/utils/redux/reduxHookPageSlice";

import type { RootState } from "@/utils/redux/store";

const HomePageLayout = () => {
  const dispatch = useDispatch();

  const {
    isMenuDrawerOpen,
  } = useSelector(
    (state: RootState) => state.reduxHookPage
  );

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
        ]}
      />
    </View>
  );
};

export default HomePageLayout;