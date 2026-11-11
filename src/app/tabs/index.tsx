import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Beranda Utama</Text>
      <Text style={styles.subtitle}>
        Selamat datang di aplikasi portal mahasiswa.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf8fa",
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#9ae637" },
  subtitle: {
    fontSize: 13,
    color: "#ac087e",
    marginTop: 6,
    textAlign: "center",
  },
});
