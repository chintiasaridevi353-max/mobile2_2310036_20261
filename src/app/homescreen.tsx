import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Hello World</Text>
      </View>
    </View>
  );
}
