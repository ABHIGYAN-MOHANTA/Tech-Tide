import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const Two = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <WebView
        style={{ flex: 1, width: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: "https://levelup.gitconnected.com/system-design-interview-survival-guide-2023-preparation-strategies-and-practical-tips-ba9314e6b9e3",
        }}
      />
    </SafeAreaView>
  );
};

export default Two;
