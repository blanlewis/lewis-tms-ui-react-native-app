import { View } from "react-native";
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
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingTop: 45,
      }}
    >
      {/* Header */}
      <Drawer.Section
        style={{
          width: "100%",
        }}
      >
        <Drawer.Item
          label={drawerHeaderSection.title}
          icon={drawerHeaderSection.icon}
          onPress={drawerHeaderSection.onPress}
        />
      </Drawer.Section>

      {/* Drawer Items */}
      <Drawer.Section
        style={{
          width: "100%",
        }}
      >
        {drawerItemList.map((item, index) => (
          <Drawer.Item
            key={index}
            label={item.label}
            icon={item.icon}
            active={item.active}
            onPress={item.onPress}
          />
        ))}
      </Drawer.Section>

      {/* Footer */}
      <View
        style={{
          marginTop: "auto",
        }}
      >
        <Drawer.Section
          style={{
            width: "100%",
          }}
        >
          <Drawer.Item
            label={drawerFooterSection.title}
            icon={drawerFooterSection.icon}
            onPress={drawerFooterSection.onPress}
          />
        </Drawer.Section>
      </View>
    </View>
  );
};

export default CustomDrawer;