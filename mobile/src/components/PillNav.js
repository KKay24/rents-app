import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { theme } from "../constants/theme";

export default function PillNav({ activeKey, items, onChange }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <Pressable
            key={item.key}
            onPress={() => onChange(item.key)}
            style={[styles.pill, isActive && styles.activePill]}
          >
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: theme.spacing.lg,
  },
  pill: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginRight: theme.spacing.sm,
  },
  activePill: {
    backgroundColor: theme.colors.green,
  },
  label: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  activeLabel: {
    color: theme.colors.white,
  },
});
