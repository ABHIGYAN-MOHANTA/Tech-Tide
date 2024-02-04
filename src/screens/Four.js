import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const Four = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <WebView
        style={{ flex: 1, width: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: "https://quastor.substack.com/",
        }}
      />
    </SafeAreaView>
  );
};

export default Four;
