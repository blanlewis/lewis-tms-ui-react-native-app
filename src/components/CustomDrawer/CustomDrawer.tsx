import { Drawer } from 'react-native-paper';

interface CustomDrawerProps {
  drawerSection:{
    title: string;
    display: 'flex' | 'none';
  }
  drawerItemList: {
    label: string;
    active: boolean;
    onPress: () => void;
  }[]
}
const CustomDrawer = ({ drawerSection, drawerItemList }: CustomDrawerProps) => {
  return (
    <Drawer.Section title={drawerSection.title} style={{ display: drawerSection.display }}>
      {drawerItemList.map((item, index) => (
        <Drawer.Item
          key={index}
          label={item.label}
          active={item.active}
          onPress={item.onPress}
        />
      ))}
    </Drawer.Section>
  );
};

export default CustomDrawer;