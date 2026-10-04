import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "black",
          marginBottom: 20,
        }}
      >
        Lewis TMS
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        My first React Native screen
      </Text>

      <Text
        style={{
          fontSize: 40,
          marginTop: 20,
        }}
      >
        🚚
      </Text>
    </View>
  );
}