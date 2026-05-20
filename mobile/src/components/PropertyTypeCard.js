import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function PropertyTypeCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.total}>{item.total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginRight: theme.spacing.md,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    marginBottom: theme.spacing.md,
  },
  name: {
    textAlign: "center",
    color: theme.colors.text,
    fontWeight: "700",
    fontSize: 15,
  },
  total: {
    textAlign: "center",
    color: theme.colors.textSoft,
    marginTop: 6,
    fontSize: 13,
  },
});
