import { Slot } from "expo-router";
import { View } from "react-native";

import HomePageLayout from "@/components/HomePageLayout";

const MainLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomePageLayout />
      <Slot />
    </View>
  );
};

export default MainLayout;