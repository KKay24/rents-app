import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function PropertyCard({ item }) {
  const isSale = item.category === "For Sale";

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.row}>
          <View
            style={[
              styles.badge,
              isSale ? styles.saleBadge : styles.rentBadge,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                isSale ? styles.saleBadgeText : styles.rentBadgeText,
              ]}
            >
              {item.category}
            </Text>
          </View>
          <Text style={styles.type}>{item.type}</Text>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.perUnit}>/sqft</Text>
        </View>
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
    height: 190,
  },
  body: {
    padding: theme.spacing.lg,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
  },
  saleBadge: {
    backgroundColor: theme.colors.saleBg,
  },
  rentBadge: {
    backgroundColor: theme.colors.rentBg,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  saleBadgeText: {
    color: theme.colors.saleText,
  },
  rentBadgeText: {
    color: theme.colors.rentText,
  },
  type: {
    color: theme.colors.textSoft,
    fontSize: 12,
    fontWeight: "600",
  },
  name: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  location: {
    color: theme.colors.textSoft,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: theme.spacing.md,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  price: {
    color: theme.colors.green,
    fontSize: 24,
    fontWeight: "800",
  },
  perUnit: {
    marginLeft: 6,
    color: theme.colors.textSoft,
    fontSize: 13,
    marginBottom: 4,
  },
});
