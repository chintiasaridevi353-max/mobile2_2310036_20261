import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";
export default function Page() {
  // Pengalihan instan ke rute /profil
  return <Redirect href="/tabs" />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxImage: {
    width: 60,
    height: 60,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxRed: {
    flex: 1,
    backgroundColor: "#e74c3c",
  },
  boxGreen: {
    flex: 2,
    backgroundColor: "#2ecc71",
  },
  boxBlue: {
    flex: 1,
    backgroundColor: "#3498db",
  },
  text: { color: "#ffffff", fontSize: 24, fontWeight: "bold" },
});
