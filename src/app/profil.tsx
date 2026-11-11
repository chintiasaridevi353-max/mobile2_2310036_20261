import { StyleSheet, Text, View } from "react-native";

export default function Profil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Profil Mahasiswa</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },
});
