import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GalleryHomePage } from "./src/features/gallery/page/home";
import { PathPage } from "./src/features/path";
import { PointsHomePage } from "./src/features/points/page/home";

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
  },
});
