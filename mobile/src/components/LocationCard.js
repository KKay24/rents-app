import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function LocationCard({ item }) {
  return (
    <ImageBackground
      source={item.image}
      style={styles.card}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.meta}>
          {item.villas}  |  {item.offices}  |  {item.apartments}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 220,
    justifyContent: "flex-end",
    marginBottom: theme.spacing.md,
  },
  image: {
    borderRadius: theme.radius.lg,
  },
  overlay: {
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    backgroundColor: "rgba(16, 35, 63, 0.42)",
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  meta: {
    color: theme.colors.mutedLight,
    marginTop: theme.spacing.sm,
    fontSize: 13,
    lineHeight: 20,
  },
});
