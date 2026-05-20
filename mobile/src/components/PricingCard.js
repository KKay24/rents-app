import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function PricingCard({ item }) {
  return (
    <View
      style={[
        styles.card,
        item.bestValue && styles.bestCard,
      ]}
    >
      {item.bestValue ? (
        <View style={styles.bestBadge}>
          <Text style={styles.bestBadgeText}>Best Value</Text>
        </View>
      ) : null}
      <Text style={styles.plan}>{item.plan}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.currency}>K</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Text style={styles.note}>{item.note}</Text>
      <View style={styles.featureList}>
        {item.features.map((feature) => (
          <View key={feature.text} style={styles.featureRow}>
            <View
              style={[
                styles.dot,
                feature.included ? styles.includedDot : styles.excludedDot,
              ]}
            />
            <Text
              style={[
                styles.featureText,
                !feature.included && styles.excludedText,
              ]}
            >
              {feature.text}
            </Text>
          </View>
        ))}
      </View>
      <Pressable
        onPress={() => {}}
        style={[
          styles.button,
          item.bestValue ? styles.bestButton : styles.defaultButton,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            item.bestValue ? styles.bestButtonText : styles.defaultButtonText,
          ]}
        >
          Start {item.plan}
        </Text>
      </Pressable>
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
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  bestCard: {
    borderWidth: 1,
    borderColor: theme.colors.green,
  },
  bestBadge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    backgroundColor: theme.colors.orange,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    marginBottom: theme.spacing.md,
  },
  bestBadgeText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  plan: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: theme.spacing.sm,
  },
  currency: {
    fontSize: 24,
    color: theme.colors.text,
    fontWeight: "700",
    marginTop: 8,
  },
  price: {
    fontSize: 52,
    lineHeight: 58,
    fontWeight: "800",
    color: theme.colors.text,
    marginLeft: 4,
  },
  note: {
    color: theme.colors.textSoft,
    marginTop: theme.spacing.xs,
  },
  featureList: {
    marginTop: theme.spacing.lg,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: theme.spacing.sm,
  },
  includedDot: {
    backgroundColor: theme.colors.green,
  },
  excludedDot: {
    backgroundColor: theme.colors.dangerText,
  },
  featureText: {
    flex: 1,
    color: theme.colors.text,
    lineHeight: 20,
  },
  excludedText: {
    color: theme.colors.textSoft,
  },
  button: {
    borderRadius: theme.radius.md,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },
  bestButton: {
    backgroundColor: theme.colors.green,
  },
  defaultButton: {
    backgroundColor: theme.colors.surface,
  },
  buttonText: {
    fontWeight: "700",
  },
  bestButtonText: {
    color: theme.colors.white,
  },
  defaultButtonText: {
    color: theme.colors.green,
  },
});
