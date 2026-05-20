import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ActionCard from "../components/ActionCard";
import InfoCard from "../components/InfoCard";
import PageIntroCard from "../components/PageIntroCard";
import PropertyTypeCard from "../components/PropertyTypeCard";
import ScreenLayout from "../components/ScreenLayout";
import SectionTitle from "../components/SectionTitle";
import { images } from "../constants/images";
import { theme } from "../constants/theme";
import {
  featuredTypes,
  serviceHighlights,
} from "../data/content";

export default function ServicesScreen({ onNavigate }) {
  return (
    <ScreenLayout>
      <PageIntroCard
        image={images.page.services}
        eyebrow="Services"
        title="Services - All Services"
        description="The web version reuses featured property cards here, so the mobile build keeps that relationship while adding clearer service summaries."
      />

      <SectionTitle
        eyebrow="Property Types"
        title="Find the right category faster"
        subtitle="Swipe through the core inventory types without leaving the services screen."
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {featuredTypes.map((item) => (
          <PropertyTypeCard key={item.name} item={item} />
        ))}
      </ScrollView>

      <SectionTitle
        eyebrow="Service Focus"
        title="What this mobile experience helps with"
        subtitle="These service cards clarify how the Expo build supports browsing and conversion on phones."
      />
      {serviceHighlights.map((item) => (
        <InfoCard
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}

      <ActionCard
        title="Need help choosing a property type?"
        description="The contact screen is ready for questions, follow-ups, and booking conversations."
        buttonLabel="Contact The Team"
        onPress={() => onNavigate("contact")}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  horizontalList: {
    paddingBottom: theme.spacing.lg,
    paddingTop: theme.spacing.xs,
  },
});
