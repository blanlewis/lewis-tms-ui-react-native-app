import { Drawer } from 'react-native-paper';

interface CustomDrawerProps {
  isMenuDrawerOpen: boolean;
}
const CustomDrawer = ({ isMenuDrawerOpen }: CustomDrawerProps) => {
  return (
    <Drawer.Section title="Some title" style={{ display: isMenuDrawerOpen ? 'flex' : 'none' }}>
      <Drawer.Item
        label="First Item"
        active={true}
        onPress={() => {}}
      />
      <Drawer.Item
        label="Second Item"
        active={false}
        onPress={() => {}}
      />
    </Drawer.Section>
  );
};

export default CustomDrawer;