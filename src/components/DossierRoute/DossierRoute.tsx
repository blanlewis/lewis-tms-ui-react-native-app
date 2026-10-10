
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Badge, List, Text } from 'react-native-paper';
import CustomAccordion from '../CustomAccordion';

type DossierStatus =
  | 'Draft'
  | 'In Transit'
  | 'Planned'
  | 'Delayed'
  | 'Done';

type Dossier = {
  id: number;
  origin: string;
  destination: string;
  status: DossierStatus;
  originLatitude: number;
  originLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
};

const dossiers: Dossier[] = [
  { id: 1, origin: 'Udupi', destination: 'Mangalore', status: 'Planned', originLatitude: 13.3409, originLongitude: 74.7421, destinationLatitude: 12.9141, destinationLongitude: 74.8560 },
  { id: 2, origin: 'Mangalore', destination: 'Kundapura', status: 'In Transit', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 13.6220, destinationLongitude: 74.6919 },
  { id: 3, origin: 'Udupi', destination: 'Manipal', status: 'Draft', originLatitude: 13.3409, originLongitude: 74.7421, destinationLatitude: 13.3525, destinationLongitude: 74.7928 },
  { id: 4, origin: 'Mangalore', destination: 'Bangalore', status: 'Done', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 12.9716, destinationLongitude: 77.5946 },
  { id: 5, origin: 'Kundapura', destination: 'Karwar', status: 'Delayed', originLatitude: 13.6220, originLongitude: 74.6919, destinationLatitude: 14.8136, destinationLongitude: 74.1297 },
  { id: 6, origin: 'Mysore', destination: 'Bangalore', status: 'Planned', originLatitude: 12.2958, originLongitude: 76.6394, destinationLatitude: 12.9716, destinationLongitude: 77.5946 },
  { id: 7, origin: 'Hubli', destination: 'Dharwad', status: 'In Transit', originLatitude: 15.3647, originLongitude: 75.1240, destinationLatitude: 15.4589, destinationLongitude: 75.0078 },
  { id: 8, origin: 'Belgaum', destination: 'Hubli', status: 'Draft', originLatitude: 15.8497, originLongitude: 74.4977, destinationLatitude: 15.3647, destinationLongitude: 75.1240 },
  { id: 9, origin: 'Shimoga', destination: 'Udupi', status: 'Done', originLatitude: 13.9299, originLongitude: 75.5681, destinationLatitude: 13.3409, destinationLongitude: 74.7421 },
  { id: 10, origin: 'Hassan', destination: 'Mysore', status: 'Delayed', originLatitude: 13.0033, originLongitude: 76.1004, destinationLatitude: 12.2958, destinationLongitude: 76.6394 },
  { id: 11, origin: 'Bangalore', destination: 'Tumkur', status: 'Planned', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 13.3379, destinationLongitude: 77.1173 },
  { id: 12, origin: 'Mangalore', destination: 'Puttur', status: 'In Transit', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 12.7598, destinationLongitude: 75.2015 },
  { id: 13, origin: 'Udupi', destination: 'Karkala', status: 'Draft', originLatitude: 13.3409, originLongitude: 74.7421, destinationLatitude: 13.2143, destinationLongitude: 74.9920 },
  { id: 14, origin: 'Karwar', destination: 'Gokarna', status: 'Done', originLatitude: 14.8136, originLongitude: 74.1297, destinationLatitude: 14.5479, destinationLongitude: 74.3188 },
  { id: 15, origin: 'Davangere', destination: 'Haveri', status: 'Delayed', originLatitude: 14.4644, originLongitude: 75.9218, destinationLatitude: 14.7951, destinationLongitude: 75.3991 },
  { id: 16, origin: 'Bangalore', destination: 'Mysore', status: 'Planned', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 12.2958, destinationLongitude: 76.6394 },
  { id: 17, origin: 'Chikkamagaluru', destination: 'Hassan', status: 'In Transit', originLatitude: 13.3161, originLongitude: 75.7720, destinationLatitude: 13.0033, destinationLongitude: 76.1004 },
  { id: 18, origin: 'Bidar', destination: 'Kalaburagi', status: 'Draft', originLatitude: 17.9104, originLongitude: 77.5199, destinationLatitude: 17.3297, destinationLongitude: 76.8343 },
  { id: 19, origin: 'Raichur', destination: 'Ballari', status: 'Done', originLatitude: 16.2120, originLongitude: 77.3439, destinationLatitude: 15.1394, destinationLongitude: 76.9214 },
  { id: 20, origin: 'Vijayapura', destination: 'Bagalkot', status: 'Delayed', originLatitude: 16.8302, originLongitude: 75.7100, destinationLatitude: 16.1867, destinationLongitude: 75.6961 },
  { id: 21, origin: 'Mandya', destination: 'Mysore', status: 'Planned', originLatitude: 12.5220, originLongitude: 76.9009, destinationLatitude: 12.2958, destinationLongitude: 76.6394 },
  { id: 22, origin: 'Tumkur', destination: 'Chitradurga', status: 'In Transit', originLatitude: 13.3379, originLongitude: 77.1173, destinationLatitude: 14.2251, destinationLongitude: 76.3980 },
  { id: 23, origin: 'Udupi', destination: 'Bhatkal', status: 'Draft', originLatitude: 13.3409, originLongitude: 74.7421, destinationLatitude: 13.9850, destinationLongitude: 74.5553 },
  { id: 24, origin: 'Mangalore', destination: 'Kasargod', status: 'Done', originLatitude: 12.9141, originLongitude: 74.8560, destinationLatitude: 12.4996, destinationLongitude: 74.9869 },
  { id: 25, origin: 'Bangalore', destination: 'Kolar', status: 'Delayed', originLatitude: 12.9716, originLongitude: 77.5946, destinationLatitude: 13.1367, destinationLongitude: 78.1292 },
  { id: 26, origin: 'Dharwad', destination: 'Haveri', status: 'Planned', originLatitude: 15.4589, originLongitude: 75.0078, destinationLatitude: 14.7951, destinationLongitude: 75.3991 },
  { id: 27, origin: 'Shimoga', destination: 'Chitradurga', status: 'In Transit', originLatitude: 13.9299, originLongitude: 75.5681, destinationLatitude: 14.2251, destinationLongitude: 76.3980 },
  { id: 28, origin: 'Hassan', destination: 'Chikkamagaluru', status: 'Draft', originLatitude: 13.0033, originLongitude: 76.1004, destinationLatitude: 13.3161, destinationLongitude: 75.7720 },
  { id: 29, origin: 'Belgaum', destination: 'Bagalkot', status: 'Done', originLatitude: 15.8497, originLongitude: 74.4977, destinationLatitude: 16.1867, destinationLongitude: 75.6961 },
  { id: 30, origin: 'Mysore', destination: 'Mandya', status: 'Delayed', originLatitude: 12.2958, originLongitude: 76.6394, destinationLatitude: 12.5220, destinationLongitude: 76.9009 },
];

const statusColors: Record<DossierStatus, string> = {
  Draft: '#757575',
  'In Transit': '#1976D2',
  Planned: '#7B1FA2',
  Delayed: '#D32F2F',
  Done: '#2E7D32',
};

const DossierRoute = () => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{
        padding: 12,
        paddingBottom: 24,
      }}
    >
      {dossiers.map((dossier) => (
        <CustomAccordion
          key={dossier.id}
          expanded={expandedId === dossier.id}
          onPress={() =>
            setExpandedId(
              expandedId === dossier.id ? null : dossier.id,
            )
          }
          style={{
            width: '100%',
            marginBottom: 8,
            borderRadius: 8,
          }}
            left={(props: { color: string; style?: object }) => (
            <List.Icon {...props} icon="truck-delivery-outline" />
            )}
          title={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
                paddingRight: 8,
              }}
            >
              <Text
                variant="titleSmall"
                style={{ flex: 1 }}
              >
                {dossier.origin} → {dossier.destination}
              </Text>

              <Badge
                style={{
                  backgroundColor: statusColors[dossier.status],
                  color: '#FFFFFF',
                  marginLeft: 8,
                }}
              >
                {dossier.status}
              </Badge>
            </View>
          }
        >
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              gap: 10,
            }}
          >
            <Text variant="titleSmall">Dossier #{dossier.id}</Text>

            <Text variant="bodyMedium">
              Origin: {dossier.origin}
            </Text>

            <Text variant="bodyMedium">
              Latitude: {dossier.originLatitude}
            </Text>

            <Text variant="bodyMedium">
              Longitude: {dossier.originLongitude}
            </Text>

            <View
              style={{
                height: 1,
                backgroundColor: '#DDDDDD',
                marginVertical: 4,
              }}
            />

            <Text variant="bodyMedium">
              Destination: {dossier.destination}
            </Text>

            <Text variant="bodyMedium">
              Latitude: {dossier.destinationLatitude}
            </Text>

            <Text variant="bodyMedium">
              Longitude: {dossier.destinationLongitude}
            </Text>
          </View>
        </CustomAccordion>
      ))}
    </ScrollView>
  );
};

export default DossierRoute;