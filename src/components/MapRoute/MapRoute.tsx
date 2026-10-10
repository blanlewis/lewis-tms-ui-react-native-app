import { View } from 'react-native';
import MapComponent from '../MapComponent';

const MapRoute = () => {
  const activeRoute = {
    originLatitude: 13.3408,
    originLongitude: 74.7421,
    destinationLatitude: 12.9141,
    destinationLongitude: 74.8560,
    originTitle: 'Udupi (Woods)',
    destinationTitle: 'Mangalore Port',
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <MapComponent {...activeRoute} />
    </View>
  );
};

export default MapRoute;