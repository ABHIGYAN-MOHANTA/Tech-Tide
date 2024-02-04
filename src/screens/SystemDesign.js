import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const SystemDesign = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <WebView
        style={{ flex: 1, width: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: "https://newsletter.systemdesign.one/?r=n49ky",
        }}
      />
    </SafeAreaView>
  );
};

export default SystemDesign;
