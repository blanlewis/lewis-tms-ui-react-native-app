import { View, ViewStyle } from "react-native";
import { Drawer } from "react-native-paper";

interface CustomDrawerProps {
  drawerHeaderSection: {
    title: string;
    icon: string;
    onPress: () => void;
  };

  drawerItemList: {
    label: string;
    icon: string;
    active: boolean;
    onPress: () => void;
  }[];

  drawerFooterSection: {
    title: string;
    icon: string;
    onPress: () => void;
  };
}

const CustomDrawer = ({
  drawerHeaderSection,
  drawerItemList,
  drawerFooterSection,
}: CustomDrawerProps) => {
  // Explicitly typing ViewStyle resolves the string vs DimensionValue error
  const fullWidthItemStyle: ViewStyle = {
    marginHorizontal: 0,
    borderRadius: 0,
    width: "100%",
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        paddingTop: 55,
      }}
    >
      {/* Header */}
      <Drawer.Section style={{ width: "100%" }}>
        <Drawer.Item
          label={drawerHeaderSection.title}
          icon={drawerHeaderSection.icon}
          onPress={drawerHeaderSection.onPress}
          style={fullWidthItemStyle}
        />
      </Drawer.Section>

      {/* Drawer Items */}
      <Drawer.Section style={{ width: "100%" }}>
        {drawerItemList.map((item, index) => (
          <Drawer.Item
            key={index}
            label={item.label}
            icon={item.icon}
            active={item.active}
            onPress={item.onPress}
            style={fullWidthItemStyle}
          />
        ))}
      </Drawer.Section>

      {/* Footer */}
      <View style={{ marginTop: "auto", marginBottom: 24 }}>
        <Drawer.Section style={{ width: "100%" }}>
          <Drawer.Item
            label={drawerFooterSection.title}
            icon={drawerFooterSection.icon}
            onPress={drawerFooterSection.onPress}
            style={fullWidthItemStyle}
          />
        </Drawer.Section>
      </View>
    </View>
  );
};

export default CustomDrawer;