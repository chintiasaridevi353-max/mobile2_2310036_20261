import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Kalkulator() {
  const [angkaper, setAP] = useState("");
  const [angkaked, setAK] = useState("");

  // State baru untuk menyimpan hasil perhitungan
  const [hasil, setHasil] = useState<number | null>(null);
  const [operasi, setOperasi] = useState("");

  // Fungsi untuk melakukan perhitungan
  const hitung = (operator: string) => {
    // Mengubah teks input menjadi angka (Number). Jika kosong, dianggap 0.
    const num1 = parseFloat(angkaper) || 0;
    const num2 = parseFloat(angkaked) || 0;
    let res = 0;

    if (operator === "+") {
      res = num1 + num2;
      setOperasi("Penjumlahan (+)");
    } else if (operator === "-") {
      res = num1 - num2;
      setOperasi("Pengurangan (-)");
    } else if (operator === "×") {
      res = num1 * num2;
      setOperasi("Perkalian (×)");
    } else if (operator === "÷") {
      // Validasi agar tidak error jika membagi dengan angka 0
      if (num2 === 0) {
        alert("Tidak bisa membagi dengan angka 0!");
        return;
      }
      res = num1 / num2;
      setOperasi("Pembagian (÷)");
    }

    setHasil(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Sederhana</Text>

      <Text style={styles.label}>Angka Pertama:</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#94a3b8"
        value={angkaper}
        onChangeText={(text) => setAP(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Angka Kedua:</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#94a3b8"
        value={angkaked}
        onChangeText={(text) => setAK(text)}
        keyboardType="numeric"
      />

      {/* --- BAGIAN FLEXBOX TOMBOL OPERASI --- */}
      <View style={styles.buttonContainer}>
        {/* Tombol Tambah */}
        <Pressable
          style={[styles.boxButton, styles.btnTambah]}
          onPress={() => hitung("+")}
        >
          <Text style={styles.textButton}>+</Text>
        </Pressable>

        {/* Tombol Kurang */}
        <Pressable
          style={[styles.boxButton, styles.btnKurang]}
          onPress={() => hitung("-")}
        >
          <Text style={styles.textButton}>-</Text>
        </Pressable>

        {/* Tombol Kali */}
        <Pressable
          style={[styles.boxButton, styles.btnKali]}
          onPress={() => hitung("×")}
        >
          <Text style={styles.textButton}>×</Text>
        </Pressable>

        {/* Tombol Bagi */}
        <Pressable
          style={[styles.boxButton, styles.btnBagi]}
          onPress={() => hitung("÷")}
        >
          <Text style={styles.textButton}>÷</Text>
        </Pressable>
      </View>
      {/* -------------------------------------- */}

      {/* Kartu Pratinjau & Hasil Perhitungan */}
      <View style={styles.cardPreview}>
        <Text style={styles.cardTitle}>Pratinjau & Hasil Perhitungan:</Text>
        <Text style={styles.cardText}>
          Angka Pertama : {angkaper !== "" ? angkaper : "(Belum diisi)"}
        </Text>
        <Text style={styles.cardText}>
          Angka Kedua : {angkaked !== "" ? angkaked : "(Belum diisi)"}
        </Text>

        {/* Menampilkan Hasil Jika Tombol Sudah Ditekan */}
        {hasil !== null && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>Operasi: {operasi}</Text>
            <Text style={styles.resultNumber}>Hasil: {hasil}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  boxButton: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
  resultBox: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#7dd3fc",
  },
  resultText: {
    fontSize: 13,
    color: "#0369a1",
    fontWeight: "600",
  },
  resultNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0284c7",
    marginTop: 2,
  },
  btnTambah: { backgroundColor: "#3b82f6" },
  btnKurang: { backgroundColor: "#10b981" },
  btnKali: { backgroundColor: "#f59e0b" },
  btnBagi: { backgroundColor: "#ef4444" },
});
