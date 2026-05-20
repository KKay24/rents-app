import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import InfoCard from "../components/InfoCard";
import PageIntroCard from "../components/PageIntroCard";
import ScreenLayout from "../components/ScreenLayout";
import SectionTitle from "../components/SectionTitle";
import { images } from "../constants/images";
import { theme } from "../constants/theme";
import { contactDetails } from "../data/content";

export default function ContactScreen() {
  return (
    <ScreenLayout>
      <PageIntroCard
        image={images.page.pricing}
        eyebrow="Contact Us"
        title="Get Help And Friendly Support"
        description="A touch-friendly contact screen with enough structure for Android and iOS users to reach out comfortably."
      />

      <SectionTitle
        eyebrow="Support"
        title="Reach the team your way"
        subtitle="These contact cards summarize the key channels before the form."
      />
      {contactDetails.map((item) => (
        <InfoCard
          key={item.title}
          title={item.title}
          value={item.value}
          description={item.description}
        />
      ))}

      <SectionTitle
        eyebrow="Form"
        title="Fill up the form"
        subtitle="This form is presentational for now, matching the behavior of the current web project."
      />
      <View style={styles.formCard}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={theme.colors.textSoft}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.colors.textSoft}
          style={styles.input}
        />
        <TextInput
          placeholder="Subject"
          placeholderTextColor={theme.colors.textSoft}
          style={styles.input}
        />
        <TextInput
          placeholder="Tell us what you need"
          placeholderTextColor={theme.colors.textSoft}
          style={[styles.input, styles.messageInput]}
          multiline
          textAlignVertical="top"
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Submit Request</Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.xl,
    padding: theme.spacing.lg,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 14,
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  messageInput: {
    minHeight: 140,
  },
  button: {
    backgroundColor: theme.colors.green,
    borderRadius: theme.radius.md,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "700",
  },
});
