import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function StatCard({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{item.value}</Text>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: theme.colors.navy,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  value: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: "800",
  },
  label: {
    color: theme.colors.mutedLight,
    fontSize: 13,
    lineHeight: 20,
    marginTop: theme.spacing.sm,
  },
});
