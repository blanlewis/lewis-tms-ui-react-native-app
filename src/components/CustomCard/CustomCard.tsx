import { Button, Card, Text } from 'react-native-paper';

type CustomCardProps = {
  id: number;
  origin: string;
  destination: string;
  status: string;
  originLatitude: number;
  originLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
  onPress?: () => void;
};

const CustomCard = ({
  id,
  origin,
  destination,
  status,
  originLatitude,
  originLongitude,
  destinationLatitude,
  destinationLongitude,
  onPress,
}: CustomCardProps) => (
  <Card
    style={{
      width: '100%',
      marginBottom: 12,
      borderRadius: 12,
    }}
  >
    <Card.Content
      style={{
        gap: 8,
      }}
    >
      <Text variant="titleMedium">
        Booking #{id}
      </Text>

      <Text variant="titleLarge">
        {origin} → {destination}
      </Text>

      <Text variant="bodyMedium">
        Status: {status}
      </Text>

      <Text variant="titleSmall">
        Origin Coordinates
      </Text>

      <Text variant="bodyMedium">
        Latitude: {originLatitude}
      </Text>

      <Text variant="bodyMedium">
        Longitude: {originLongitude}
      </Text>

      <Text variant="titleSmall">
        Destination Coordinates
      </Text>

      <Text variant="bodyMedium">
        Latitude: {destinationLatitude}
      </Text>

      <Text variant="bodyMedium">
        Longitude: {destinationLongitude}
      </Text>
    </Card.Content>

    <Card.Actions>
      <Button onPress={onPress}>
        View Booking
      </Button>
    </Card.Actions>
  </Card>
);

export default CustomCard;