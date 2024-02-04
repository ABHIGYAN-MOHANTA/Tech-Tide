import React, { useState, useEffect } from "react";
import { SafeAreaView, BackHandler, Button } from "react-native";
import WebView from "react-native-webview";

const Two = () => {
  const [canGoBack, setCanGoBack] = useState(false);

  const webViewRef = React.useRef(null);

  useEffect(() => {
    const handleBackPress = () => {
      if (canGoBack) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  const handleNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  const goBack = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <WebView
        ref={webViewRef}
        style={{ flex: 1, width: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: "https://levelup.gitconnected.com/system-design-interview-survival-guide-2023-preparation-strategies-and-practical-tips-ba9314e6b9e3",
        }}
        onNavigationStateChange={handleNavigationStateChange}
      />
      {canGoBack && <Button title="Go Back" onPress={goBack} />}
    </SafeAreaView>
  );
};

export default Two;
