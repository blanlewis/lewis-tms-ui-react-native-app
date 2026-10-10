import { View } from 'react-native';
import { WebView } from 'react-native-webview';

type MapComponentProps = {
  originLatitude: number;
  originLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
  originTitle?: string;
  destinationTitle?: string;
};

const MapComponent = ({
  originLatitude,
  originLongitude,
  destinationLatitude,
  destinationLongitude,
  originTitle = 'Udupi',
  destinationTitle = 'Mangalore',
}: MapComponentProps) => {
  const midLat = (originLatitude + destinationLatitude) / 2;
  const midLng = (originLongitude + destinationLongitude) / 2;

  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; background-color: #f8f9fa; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var map = L.map('map', { zoomControl: true }).setView([${midLat}, ${midLng}], 8);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([${originLatitude}, ${originLongitude}]).addTo(map)
          .bindPopup('<b>Origin:</b> ${originTitle}');

        L.marker([${destinationLatitude}, ${destinationLongitude}]).addTo(map)
          .bindPopup('<b>Destination:</b> ${destinationTitle}');

        var latlngs = [
          [${originLatitude}, ${originLongitude}],
          [${destinationLatitude}, ${destinationLongitude}]
        ];
        var polyline = L.polyline(latlngs, {color: '#1E88E5', weight: 4}).addTo(map);

        map.fitBounds(polyline.getBounds(), {padding: [50, 50]});
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: mapHtml }}
        style={{ flex: 1, backgroundColor: 'transparent' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default MapComponent;