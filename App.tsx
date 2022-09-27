import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GalleryHomePage } from "./src/features/gallery/page/home";

export default function App() {
  return (
    <View style={styles.container}>
      <GalleryHomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
