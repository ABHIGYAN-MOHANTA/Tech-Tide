import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const Seven = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <WebView
        style={{ flex: 1, width: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: "https://aman.ai/papers/",
        }}
      />
    </SafeAreaView>
  );
};

export default Seven;
