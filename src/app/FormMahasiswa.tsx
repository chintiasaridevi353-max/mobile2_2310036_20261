import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormMahasiswa() {
  // 1. Deklarasi State
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulir Data Mahasiswa</Text>

      {/* Input 1: Nama Lengkap */}
      <Text style={styles.label}>Nama Lengkap:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Budi Pratama"
        placeholderTextColor="#94a3b8"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />

      {/* Input 2: NIM (Khusus Angka) */}
      <Text style={styles.label}>Nomor Induk Mahasiswa (NIM):</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 20260012"
        placeholderTextColor="#94a3b8"
        value={nim}
        onChangeText={(text) => setNim(text)}
        keyboardType="numeric"
      />

      {/* Input 3: email-address (Khusus Angka) */}
      <Text style={styles.label}>Email-Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: chintiasaridevi@gmail.com"
        placeholderTextColor="#94a3b8"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Kartu Pratinjau Langsung */}
      <View style={styles.cardPreview}>
        <Text style={styles.cardTitle}>Pratinjau Data (Real-time):</Text>
        <Text style={styles.cardText}>
          Nama : {nama !== "" ? nama : "(Belum diisi)"}
        </Text>
        <Text style={styles.cardText}>
          NIM : {nim !== "" ? nim : "(Belum diisi)"}
        </Text>
        <Text style={styles.cardText}>
          Email-Address : {email !== "" ? email : "(Belum diisi)"}
        </Text>
      </View>

      {/* Tombol Reset Formulir */}
      <Pressable
        style={styles.buttonReset}
        onPress={() => {
          setNama("");
          setNim("");
          setEmail("");
        }}
      >
        <Text style={styles.buttonText}>Kosongkan Formulir</Text>
      </Pressable>

      {/* 👇 TAMBAHKAN KODE INI DI BAWAH TOMBOL RESET 👇 */}
      {(nama === "" || nim === "" || email === "") && (
        <Text
          style={{
            color: "red",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Peringatan: Data Tidak Boleh Kosong!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#0f172a",
  },
  cardPreview: {
    marginTop: 24,
    backgroundColor: "#e0f2fe",
    borderWidth: 1,
    borderColor: "#bae6fd",
    borderRadius: 10,
    padding: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0369a1",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 13,
    color: "#0f172a",
    marginBottom: 4,
  },
  buttonReset: {
    marginTop: 16,
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
