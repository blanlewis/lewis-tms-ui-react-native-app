import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import BookingRoute from '../BookingRoute';
import DossierRoute from '../DossierRoute';
import MapRoute from '../MapRoute';
import NotificationsRoute from '../NotificationsRoute';


const CustomBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'dossier',
      title: 'Dossier',
      focusedIcon: 'folder',
      unfocusedIcon: 'folder-outline',
    },
    {
      key: 'booking',
      title: 'Booking',
      focusedIcon: 'calendar',
      unfocusedIcon: 'calendar-outline',
    },
    {
      key: 'map',
      title: 'Map',
      focusedIcon: 'map',
      unfocusedIcon: 'map-outline',
    },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dossier: DossierRoute,
    booking: BookingRoute,
    map: MapRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default CustomBottomNavigation;