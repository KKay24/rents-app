import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function InfoCard({ title, description, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {value ? <Text style={styles.value}>{value}</Text> : null}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  title: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: "700",
  },
  value: {
    color: theme.colors.green,
    fontSize: 15,
    fontWeight: "700",
    marginTop: theme.spacing.sm,
  },
  description: {
    color: theme.colors.textSoft,
    marginTop: theme.spacing.sm,
    lineHeight: 22,
  },
});
