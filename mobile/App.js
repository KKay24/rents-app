import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomTabBar from "./src/components/BottomTabBar";
import { theme } from "./src/constants/theme";
import AboutScreen from "./src/screens/AboutScreen";
import BlogScreen from "./src/screens/BlogScreen";
import ContactScreen from "./src/screens/ContactScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CarRentalScreen from "./src/screens/CarRentalScreen";
import PricingScreen from "./src/screens/PricingScreen";
import ServicesScreen from "./src/screens/ServicesScreen";

const screenMap = {
  home: HomeScreen,
  cars: CarRentalScreen,
  search: AboutScreen, // Placeholder for Search
  saved: ServicesScreen, // Placeholder for Saved
  messages: BlogScreen, // Placeholder for Messages
  profile: ContactScreen, // Placeholder for Profile
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");
  const ActiveScreen = screenMap[activeScreen] || HomeScreen;

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f8f9fa"
      />
      <View style={styles.app}>
        <View style={styles.content}>
          <ActiveScreen onNavigate={setActiveScreen} />
        </View>
        <BottomTabBar
          activeKey={activeScreen}
          onChange={setActiveScreen}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
});


