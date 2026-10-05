import { Drawer } from 'react-native-paper';

const CustomDrawer = () => {
  return (
    <Drawer.Section title="Some title">
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