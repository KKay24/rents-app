import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function PageIntroCard({ image, eyebrow, title, description }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    marginBottom: theme.spacing.xl,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 210,
  },
  body: {
    padding: theme.spacing.lg,
  },
  eyebrow: {
    color: theme.colors.green,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 6,
  },
  title: {
    color: theme.colors.text,
    fontWeight: "800",
    fontSize: 26,
    lineHeight: 32,
  },
  description: {
    color: theme.colors.textSoft,
    fontSize: 14,
    lineHeight: 22,
    marginTop: theme.spacing.sm,
  },
});
