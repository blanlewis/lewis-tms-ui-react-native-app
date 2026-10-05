import { setReduxHookState } from "@/utils/redux/reduxHookSlice";
import type { RootState } from "@/utils/redux/store";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { CustomAppbarProps } from "../CustomAppbar";
import CustomAppbar from "../CustomAppbar";
import CustomDrawer from "../CustomDrawer";

const HomePageLayout = () => {
  const isMenuDrawerOpen = useSelector(
    (state: RootState) => state.reduxHook.isMenuDrawerOpen
  );
  const dispatch = useDispatch();

  const appTopBar: CustomAppbarProps = {
    appBarLeftIconAction: {
      icon: "menu",
      onPress: () => {
        console.log("Menu clicked");
        dispatch(setReduxHookState({ isMenuDrawerOpen: !isMenuDrawerOpen }));
        console.log("isMenuDrawerOpen:", !isMenuDrawerOpen);
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
        flex: 1,
        width: "100%",
      }}
    >
      <CustomAppbar
        appBarLeftIconAction={appTopBar.appBarLeftIconAction}
        appBarContent={appTopBar.appBarContent}
        appBarAction={appTopBar.appBarAction}
      />
      <CustomDrawer isMenuDrawerOpen={isMenuDrawerOpen} />
    </View>
  );
};

export default HomePageLayout;