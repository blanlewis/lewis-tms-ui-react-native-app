import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';

import { useCustomHook } from '../../utils/hook';
import type { BookingTypes } from '../../utils/types';
import CustomCard from '../CustomCard';

const PAGE_SIZE = 10;

const BookingRoute = () => {
  const { bookings, fetchBookings } = useCustomHook();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState('');

  const isFetchingRef = useRef(false);

  // Fetch initial bookings
  useEffect(() => {
    let mounted = true;

    const loadInitialBookings = async () => {
      isFetchingRef.current = true;
      setIsLoading(true);
      setError('');

      try {
        await fetchBookings(PAGE_SIZE, null);
      } catch (err) {
        console.error('Failed to load bookings:', err);

        if (mounted) {
          setError('Unable to load bookings. Please try again.');
        }
      } finally {
        isFetchingRef.current = false;

        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    void loadInitialBookings();

    return () => {
      mounted = false;
    };
  }, []);

  // Fetch more bookings when scrolling to the bottom
  const loadMoreBookings = async () => {
    const { hasNextPage, endCursor } = bookings.pageInfo;

    if (
      !hasNextPage ||
      !endCursor ||
      isFetchingRef.current
    ) {
      return;
    }

    isFetchingRef.current = true;
    setIsLoadingMore(true);
    setError('');

    try {
      await fetchBookings(PAGE_SIZE, endCursor);
    } catch (err) {
      console.error('Failed to load more bookings:', err);
      setError('Unable to load more bookings.');
    } finally {
      isFetchingRef.current = false;
      setIsLoadingMore(false);
    }
  };

  const renderBookingCard = ({
    item,
  }: {
    item: BookingTypes;
  }) => (
    <CustomCard
      id={item.id}
      origin={item.source}
      destination={item.destination}
      originLatitude={item.sourceLatitude}
      originLongitude={item.sourceLongitude}
      destinationLatitude={item.destinationLatitude}
      destinationLongitude={item.destinationLongitude}
      status="Scheduled"
      onPress={() => {
        console.log(`Clicked on Booking #${item.id}`);
      }}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
    >
      <Text
        variant="titleLarge"
        style={{
          marginBottom: 16,
          fontWeight: 'bold',
        }}
      >
        Bookings ({bookings.bookingsList.length})
      </Text>

      {error ? (
        <Text
          style={{
            marginBottom: 8,
            color: '#d32f2f',
          }}
        >
          {error}
        </Text>
      ) : null}

      <FlatList
        data={bookings.bookingsList}
        renderItem={renderBookingCard}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreBookings}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator
              size="large"
              style={{
                marginTop: 20,
              }}
            />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
              }}
            >
              No bookings found.
            </Text>
          )
        }
        ListFooterComponent={
          isLoadingMore ? (
            <ActivityIndicator
              size="small"
              style={{
                marginVertical: 16,
              }}
            />
          ) : null
        }
      />
    </View>
  );
};

export default BookingRoute;
