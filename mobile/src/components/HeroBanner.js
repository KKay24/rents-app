import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { theme } from "../constants/theme";

export default function HeroBanner({ fields }) {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={require("../../assets/images/banner.png")} style={styles.banner} imageStyle={styles.bannerImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Search Your Next Home</Text>
          <Text style={styles.subtitle}>
            Find new and featured property located in your local city.
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.searchCard}>
        {fields.map((field) => (
          <View key={field.label} style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>{field.label}</Text>
            <TextInput
              placeholder={field.placeholder}
              placeholderTextColor={theme.colors.textSoft}
              style={styles.input}
            />
          </View>
        ))}
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => {}}
            style={[styles.button, styles.secondaryButton]}
          >
            <Text style={styles.secondaryButtonText}>Advanced Filters</Text>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={[styles.button, styles.primaryButton]}
          >
            <Text style={styles.primaryButtonText}>Search</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.xl,
  },
  banner: {
    minHeight: 220,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  bannerImage: {
    borderRadius: theme.radius.xl,
  },
  overlay: {
    padding: theme.spacing.xl,
    backgroundColor: "rgba(16, 35, 63, 0.54)",
  },
  title: {
    color: theme.colors.white,
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
  },
  subtitle: {
    color: theme.colors.mutedLight,
    fontSize: 15,
    lineHeight: 22,
    marginTop: theme.spacing.sm,
  },
  searchCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: -24,
    marginHorizontal: theme.spacing.md,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  fieldBlock: {
    marginBottom: theme.spacing.md,
  },
  fieldLabel: {
    fontSize: 13,
    color: theme.colors.textSoft,
    marginBottom: theme.spacing.xs,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 14,
    color: theme.colors.text,
    backgroundColor: theme.colors.surface,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.sm,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    alignItems: "center",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginRight: theme.spacing.sm,
  },
  primaryButton: {
    backgroundColor: theme.colors.green,
    marginLeft: theme.spacing.sm,
  },
  secondaryButtonText: {
    color: theme.colors.text,
    fontWeight: "700",
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontWeight: "700",
  },
});
