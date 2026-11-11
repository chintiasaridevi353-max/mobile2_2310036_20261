import { StyleSheet, Text, View } from "react-native";

export default function LayoutScreen() {
  return (
    <View style={styles.mainContainer}>
      {/* 1. Bagian Header (Tinggi Tetap) */}
      <Text style={styles.headerText}>APLIKASI MAHASISWA</Text>

      {/* 2. Bagian Konten (Mengisi Seluruh Sisa Ruang) */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Area Konten Utama (flex: 1)</Text>
      </View>

      {/* 3. Bagian Footer / Navigasi (Tinggi Tetap) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Beranda | Jadwal | Profil</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 60,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    flex: 1, // Mengambil seluruh ruang tersisa di layar
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  contentText: {
    color: "#334155",
    fontSize: 15,
  },
  footer: {
    height: 55,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#475569",
    fontWeight: "600",
  },
});
