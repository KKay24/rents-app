import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <View style={styles.wrapper}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.md,
  },
  eyebrow: {
    color: theme.colors.green,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.text,
    lineHeight: 30,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    color: theme.colors.textSoft,
    fontSize: 14,
    lineHeight: 22,
  },
});
