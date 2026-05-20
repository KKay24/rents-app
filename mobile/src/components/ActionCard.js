import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function ActionCard({
  title,
  description,
  buttonLabel,
  onPress,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.navy,
    borderRadius: theme.radius.xl,
    padding: theme.spacing.xl,
    marginTop: theme.spacing.sm,
  },
  title: {
    color: theme.colors.white,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800",
  },
  description: {
    color: theme.colors.mutedLight,
    marginTop: theme.spacing.sm,
    lineHeight: 22,
    fontSize: 14,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.green,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 14,
    marginTop: theme.spacing.lg,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "700",
  },
});
