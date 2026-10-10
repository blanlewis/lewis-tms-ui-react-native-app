import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CustomCard from '../CustomCard'; // Adjust the import path if necessary

// Define the booking type explicitly
type Booking = {
  id: number;
  origin: string;
  destination: string;
  status: string;
  originLatitude: number;
  originLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
};

// Array containing 30+ booking entries with explicit typing
const bookingsData: Booking[] = [
  { id: 1, origin: 'Udupi (Woods)', destination: 'Mangalore Port', status: 'In Transit', originLatitude: 13.3408, originLongitude: 74.7421, destinationLatitude: 12.9141, destinationLongitude: 74.8560 },
  { id: 2, origin: 'Bengaluru (Pencils)', destination: 'Mysuru Hub', status: 'Delivered', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 12.2958, destinationLongitude: 76.6394 },
  { id: 3, origin: 'Hubballi (Erasers)', destination: 'Dharwad Depot', status: 'Pending', originLatitude: 15.3647, originLongitude: 75.1240, destinationLatitude: 15.4589, destinationLongitude: 75.0078 },
  { id: 4, origin: 'Shivamogga (Water Bottles)', destination: 'Udupi Store', status: 'In Transit', originLatitude: 13.9299, originLongitude: 75.5681, destinationLatitude: 13.3408, destinationLongitude: 74.7421 },
  { id: 5, origin: 'Mangalore (Snacks)', destination: 'Kasaragod Market', status: 'Delivered', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 12.5100, destinationLongitude: 74.9857 },
  { id: 6, origin: 'Panaji (Woods)', destination: 'Mangalore Warehouse', status: 'Pending', originLatitude: 15.2993, originLongitude: 74.1240, destinationLatitude: 12.9141, destinationLongitude: 74.8560 },
  { id: 7, origin: 'Mysuru (Pencils)', destination: 'Bengaluru Central', status: 'In Transit', originLatitude: 12.2958, originLongitude: 76.6394, destinationLatitude: 12.9716, destinationLongitude: 77.5946 },
  { id: 8, origin: 'Dharwad (Erasers)', destination: 'Belagavi Hub', status: 'Delivered', originLatitude: 15.4589, originLongitude: 75.0078, destinationLatitude: 15.8497, destinationLongitude: 74.4977 },
  { id: 9, origin: 'Udupi (Water Bottles)', destination: 'Kundapura Outlet', status: 'Pending', originLatitude: 13.3408, originLongitude: 74.7421, destinationLatitude: 13.6300, destinationLongitude: 74.6900 },
  { id: 10, origin: 'Bengaluru (Snacks)', destination: 'Tumakuru Depot', status: 'In Transit', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 13.3379, destinationLongitude: 77.1173 },
  { id: 11, origin: 'Mangalore (Woods)', destination: 'Udupi Central', status: 'Delivered', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 13.3408, destinationLongitude: 74.7421 },
  { id: 12, origin: 'Mysuru (Pencils)', destination: 'Mandya Store', status: 'Pending', originLatitude: 12.2958, originLongitude: 76.6394, destinationLatitude: 12.5234, destinationLongitude: 76.8954 },
  { id: 13, origin: 'Hubballi (Erasers)', destination: 'Haveri Hub', status: 'In Transit', originLatitude: 15.3647, originLongitude: 75.1240, destinationLatitude: 14.7937, destinationLongitude: 75.4022 },
  { id: 14, origin: 'Belagavi (Water Bottles)', destination: 'Hubballi Depot', status: 'Delivered', originLatitude: 15.8497, originLongitude: 74.4977, destinationLatitude: 15.3647, destinationLongitude: 75.1240 },
  { id: 15, origin: 'Tumakuru (Snacks)', destination: 'Bengaluru North', status: 'Pending', originLatitude: 13.3379, originLongitude: 77.1173, destinationLatitude: 13.0359, destinationLongitude: 77.5970 },
  { id: 16, origin: 'Udupi (Woods)', destination: 'Karkala Depot', status: 'In Transit', originLatitude: 13.3408, originLongitude: 74.7421, destinationLatitude: 13.2178, destinationLongitude: 74.9913 },
  { id: 17, origin: 'Bengaluru (Pencils)', destination: 'Kolar Hub', status: 'Delivered', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 13.1367, destinationLongitude: 78.1292 },
  { id: 18, origin: 'Mangalore (Erasers)', destination: 'Bantwal Store', status: 'Pending', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 12.8752, destinationLongitude: 75.0397 },
  { id: 19, origin: 'Mysuru (Water Bottles)', destination: 'Hassan Depot', status: 'In Transit', originLatitude: 12.2958, originLongitude: 76.6394, destinationLatitude: 13.0068, destinationLongitude: 76.1004 },
  { id: 20, origin: 'Hassan (Snacks)', destination: 'Mangalore Port', status: 'Delivered', originLatitude: 13.0068, originLongitude: 76.1004, destinationLatitude: 12.9141, destinationLongitude: 74.8560 },
  { id: 21, origin: 'Udupi (Pencils)', destination: 'Kundapura Store', status: 'Pending', originLatitude: 13.3408, originLongitude: 74.7421, destinationLatitude: 13.6300, destinationLongitude: 74.6900 },
  { id: 22, origin: 'Bengaluru (Woods)', destination: 'Shivamogga Hub', status: 'In Transit', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 13.9299, destinationLongitude: 75.5681 },
  { id: 23, origin: 'Hubballi (Water Bottles)', destination: 'Gadag Depot', status: 'Delivered', originLatitude: 15.3647, originLongitude: 75.1240, destinationLatitude: 15.4335, destinationLongitude: 75.6355 },
  { id: 24, origin: 'Mangalore (Erasers)', destination: 'Udupi Warehouse', status: 'Pending', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 13.3408, destinationLongitude: 74.7421 },
  { id: 25, origin: 'Mysuru (Snacks)', destination: 'Chamarajanagar', status: 'In Transit', originLatitude: 12.2958, originLongitude: 76.6394, destinationLatitude: 11.9261, destinationLongitude: 76.9443 },
  { id: 26, origin: 'Belagavi (Woods)', destination: 'Dharwad Store', status: 'Delivered', originLatitude: 15.8497, originLongitude: 74.4977, destinationLatitude: 15.4589, destinationLongitude: 75.0078 },
  { id: 27, origin: 'Shivamogga (Pencils)', destination: 'Davangere Hub', status: 'Pending', originLatitude: 13.9299, originLongitude: 75.5681, destinationLatitude: 14.4644, destinationLongitude: 75.9218 },
  { id: 28, origin: 'Davangere (Erasers)', destination: 'Hubballi Depot', status: 'In Transit', originLatitude: 14.4644, originLongitude: 75.9218, destinationLatitude: 15.3647, destinationLongitude: 75.1240 },
  { id: 29, origin: 'Udupi (Snacks)', destination: 'Mangalore Central', status: 'Delivered', originLatitude: 13.3408, originLongitude: 74.7421, destinationLatitude: 12.9141, destinationLongitude: 74.8560 },
  { id: 30, origin: 'Bengaluru (Water Bottles)', destination: 'Mysuru Palace', status: 'Pending', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 12.2958, destinationLongitude: 76.6394 },
];

const BookingRoute = () => {
  const renderBookingCard = ({ item }: { item: Booking }) => (
    <CustomCard
      id={item.id}
      origin={item.origin}
      destination={item.destination}
      status={item.status}
      originLatitude={item.originLatitude}
      originLongitude={item.originLongitude}
      destinationLatitude={item.destinationLatitude}
      destinationLongitude={item.destinationLongitude}
      onPress={() => console.log(`Clicked on Booking #${item.id}`)}
    />
  );

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.headerTitle}>
        Active Bookings ({bookingsData.length})
      </Text>
      
      <FlatList
        data={bookingsData}
        renderItem={renderBookingCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerTitle: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 24,
  },
});

export default BookingRoute;