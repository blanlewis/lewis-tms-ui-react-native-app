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
      <CustomDrawer
        drawerSection={{ title: "TMS Apps", display: isMenuDrawerOpen ? 'flex' : 'none' }} 
        drawerItemList={[
          { label: "Dossier Planning", active: true, onPress: () => console.log("First Item clicked") },
          { label: "Reports", active: false, onPress: () => console.log("Second Item clicked") },
          { label: "Fleet View", active: false, onPress: () => console.log("Third Item clicked") },
          { label: "Route Estimation", active: false, onPress: () => console.log("Fourth Item clicked") },
          { label: "Resource Planning", active: false, onPress: () => console.log("Fifth Item clicked") },
          { label: "Driver app", active: false, onPress: () => console.log("Sixth Item clicked") },
          { label: "Booking Creation", active: false, onPress: () => console.log("Seventh Item clicked") },
        ]}
      />
    </View>
  );
};

export default HomePageLayout;