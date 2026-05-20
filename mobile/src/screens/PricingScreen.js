import React from "react";

import ActionCard from "../components/ActionCard";
import InfoCard from "../components/InfoCard";
import PageIntroCard from "../components/PageIntroCard";
import PricingCard from "../components/PricingCard";
import ScreenLayout from "../components/ScreenLayout";
import SectionTitle from "../components/SectionTitle";
import { images } from "../constants/images";
import { plans } from "../data/content";

export default function PricingScreen({ onNavigate }) {
  return (
    <ScreenLayout>
      <PageIntroCard
        image={images.page.pricing}
        eyebrow="Pricing"
        title="No Extra Fees. Friendly Support."
        description="This mobile pricing view keeps the original three-plan structure and turns it into a touch-friendly vertical comparison."
      />

      <SectionTitle
        eyebrow="Plans"
        title="Choose a package that fits your workflow"
        subtitle="Every tier is shown as a full-width card so feature comparisons are easier on smaller screens."
      />
      {plans.map((item) => (
        <PricingCard key={item.plan} item={item} />
      ))}

      <InfoCard
        title="30-day money-back positioning"
        description="The web pricing page leads with a guarantee-focused banner. This screen preserves that trust signal while keeping the layout compact."
      />

      <ActionCard
        title="Need a walkthrough before you decide?"
        description="Ask the team about plan differences, response times, and support expectations."
        buttonLabel="Talk To Sales"
        onPress={() => onNavigate("contact")}
      />
    </ScreenLayout>
  );
}
