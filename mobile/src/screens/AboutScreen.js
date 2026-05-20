import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ActionCard from "../components/ActionCard";
import InfoCard from "../components/InfoCard";
import PageIntroCard from "../components/PageIntroCard";
import ScreenLayout from "../components/ScreenLayout";
import SectionTitle from "../components/SectionTitle";
import { images } from "../constants/images";
import { theme } from "../constants/theme";
import { aboutStory, awards } from "../data/content";

export default function AboutScreen({ onNavigate }) {
  return (
    <ScreenLayout>
      <PageIntroCard
        image={images.page.about}
        eyebrow="About Us"
        title="About Us - Who We Are?"
        description="A mobile adaptation of the original About page with cleaner reading rhythm and touch-friendly spacing."
      />

      <SectionTitle
        eyebrow="Story"
        title={aboutStory.title}
        subtitle={aboutStory.subtitle}
      />
      <View style={styles.textCard}>
        {aboutStory.paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
      </View>

      <Image source={images.brand.immio} style={styles.featureImage} />

      <SectionTitle
        eyebrow="Proof"
        title="Highlights from our growth"
        subtitle="The original site uses award counters, so the mobile version carries them into a more readable card stack."
      />
      {awards.map((item) => (
        <InfoCard
          key={item.label}
          title={item.label}
          value={item.value}
          description="Presented here as a compact summary so the About screen stays focused and scannable."
        />
      ))}

      <ActionCard
        title="Want to talk through your search?"
        description="Move straight into the contact form and support details from here."
        buttonLabel="Go To Contact"
        onPress={() => onNavigate("contact")}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  textCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  paragraph: {
    color: theme.colors.textSoft,
    lineHeight: 24,
    marginBottom: theme.spacing.md,
  },
  featureImage: {
    width: "100%",
    height: 240,
    borderRadius: theme.radius.xl,
    marginBottom: theme.spacing.xl,
  },
});
