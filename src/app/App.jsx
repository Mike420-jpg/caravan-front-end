import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{
        uri: `https://static1.e621.net/data/sample/30/77/30775a57ef42e3ab4be2368e7eaed838.webp`,
      }}
    />
  );
}
46;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
