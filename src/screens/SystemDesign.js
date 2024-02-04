import React, { useState, useEffect } from "react";
import { SafeAreaView, BackHandler, Button } from "react-native";
import WebView from "react-native-webview";

const SystemDesign = () => {
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  const webViewRef = React.useRef(null);

  const handleNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <WebView
        ref={webViewRef}
        style={{ flex: 1, width: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: "https://newsletter.systemdesign.one/?r=n49ky",
        }}
        onNavigationStateChange={handleNavigationStateChange}
      />
      {canGoBack && <Button title="Go Back" onPress={handleBackPress} />}
    </SafeAreaView>
  );
};

export default SystemDesign;
