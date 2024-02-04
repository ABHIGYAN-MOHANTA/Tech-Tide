// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SystemDesignScreen from "./src/screens/SystemDesign";
import AIScreen from "./src/screens/Two";
import Three from "./src/screens/Three";
import Four from "./src/screens/Four";
import Five from "./src/screens/Five";
import Six from "./src/screens/Six";
import Seven from "./src/screens/Seven";
import Eight from "./src/screens/Eight";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="SystemDesign">
          <Drawer.Screen
            name="Neo K's System Design"
            component={SystemDesignScreen}
          />
          <Drawer.Screen
            name="System Design Interview Survival Guide (2024)"
            component={AIScreen}
          />
          <Drawer.Screen name="Stephen Holiday White Notes" component={Three} />
          <Drawer.Screen
            name="Quastor System Design Case Studies"
            component={Four}
          />
          <Drawer.Screen name="Papers with Code" component={Five} />
          <Drawer.Screen name="Deep Learning Monitor" component={Six} />
          <Drawer.Screen name="AmanAI Papers" component={Seven} />
          <Drawer.Screen name="Arxiv-Sanity" component={Eight} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
