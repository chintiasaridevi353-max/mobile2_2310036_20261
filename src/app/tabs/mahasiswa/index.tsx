import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMahasiswa } from "../../context/MahasiswaContext"; // Sesuaikan path foldernya

export default function DataMahasiswaScreen() {
  const { mahasiswaList } = useMahasiswa();

  return (
    <View style={styles.container}>
      <FlatList
        data={mahasiswaList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listArea}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Avatar Inisial */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
            </View>

            {/* Informasi Identitas */}
            <View style={styles.infoArea}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.subText}>
                NIM: {item.nim} | Angkatan {item.angkatan}
              </Text>
              <Text style={styles.prodiText}>{item.prodi}</Text>
              <Text style={styles.phoneText}>📞 {item.noHp}</Text>
            </View>

            {/* Bagian Kanan: Badge Status & Tombol Aksi Cepat */}
            <View style={styles.rightSection}>
              <View
                style={[
                  styles.badge,
                  item.status === "Aktif"
                    ? styles.badgeActive
                    : styles.badgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    item.status === "Aktif"
                      ? styles.badgeTextActive
                      : styles.badgeTextInactive,
                  ]}
                >
                  {item.status}
                </Text>
              </View>

              {/* Tombol Aksi Cepat */}
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="call-outline" size={15} color="#072deb" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  listArea: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#072deb",
  },
  infoArea: {
    flex: 1,
  },
  nama: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subText: {
    fontSize: 11.5,
    color: "#64748b",
    marginTop: 2,
  },
  prodiText: {
    fontSize: 12,
    color: "#072deb",
    marginTop: 2,
    fontWeight: "500",
  },
  phoneText: {
    fontSize: 11.5,
    color: "#475569",
    marginTop: 2,
  },
  rightSection: {
    alignItems: "flex-end",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeActive: {
    backgroundColor: "#dcfce7",
  },
  badgeInactive: {
    backgroundColor: "#fee2e2",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  badgeTextActive: {
    color: "#16a34a",
  },
  badgeTextInactive: {
    color: "#dc2626",
  },
  actionBtn: {
    padding: 6,
    backgroundColor: "#eff6ff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },
});
