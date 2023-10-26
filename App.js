import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import TouchableOpacity from "./components/TouchableOpacity";

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <TouchableOpacity></TouchableOpacity>
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
