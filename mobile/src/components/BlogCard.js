import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function BlogCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.readTime}>{item.readTime}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.excerpt}>{item.excerpt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    overflow: "hidden",
    marginBottom: theme.spacing.md,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  body: {
    padding: theme.spacing.lg,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  category: {
    color: theme.colors.green,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  readTime: {
    color: theme.colors.textSoft,
    fontSize: 12,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "700",
  },
  excerpt: {
    color: theme.colors.textSoft,
    marginTop: theme.spacing.sm,
    lineHeight: 22,
  },
});
