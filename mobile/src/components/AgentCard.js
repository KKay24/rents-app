import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../constants/theme";

export default function AgentCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.listings}</Text>
      </View>
      <View style={styles.profileRow}>
        <Image source={item.image} style={styles.avatar} />
        <View style={styles.profileText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
      <View style={styles.channelRow}>
        {item.channels.map((channel) => (
          <View key={channel} style={styles.channelPill}>
            <Text style={styles.channelText}>{channel}</Text>
          </View>
        ))}
      </View>
      <View style={styles.actions}>
        <Pressable
          onPress={() => {}}
          style={[styles.actionButton, styles.primaryAction]}
        >
          <Text style={styles.primaryActionText}>Message</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={[styles.actionButton, styles.secondaryAction]}
        >
          <Text style={styles.secondaryActionText}>Call</Text>
        </Pressable>
      </View>
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
  badge: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.orange,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: theme.spacing.md,
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  profileText: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.text,
  },
  address: {
    color: theme.colors.textSoft,
    marginTop: 6,
    lineHeight: 20,
  },
  channelRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: theme.spacing.md,
  },
  channelPill: {
    backgroundColor: theme.colors.surface,
    borderRadius: 999,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  },
  channelText: {
    color: theme.colors.textSoft,
    fontSize: 12,
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    marginTop: theme.spacing.lg,
  },
  actionButton: {
    flex: 1,
    borderRadius: theme.radius.md,
    alignItems: "center",
    paddingVertical: 14,
  },
  primaryAction: {
    backgroundColor: theme.colors.green,
    marginRight: theme.spacing.sm,
  },
  secondaryAction: {
    backgroundColor: theme.colors.navy,
    marginLeft: theme.spacing.sm,
  },
  primaryActionText: {
    color: theme.colors.white,
    fontWeight: "700",
  },
  secondaryActionText: {
    color: theme.colors.white,
    fontWeight: "700",
  },
});
