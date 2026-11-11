import { StyleSheet, Text, View } from "react-native";

export default function PengaturanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Aplikasi</Text>
      <Text style={styles.subtitle}>
        Kelola preferensi dan akun Anda di sini.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#e637a3" },
  subtitle: { fontSize: 13, color: "#ac087e", marginTop: 6 },
});
