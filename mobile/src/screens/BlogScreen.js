import React from "react";

import ActionCard from "../components/ActionCard";
import BlogCard from "../components/BlogCard";
import PageIntroCard from "../components/PageIntroCard";
import ScreenLayout from "../components/ScreenLayout";
import SectionTitle from "../components/SectionTitle";
import { images } from "../constants/images";
import { blogPosts } from "../data/content";

export default function BlogScreen({ onNavigate }) {
  return (
    <ScreenLayout>
      <PageIntroCard
        image={images.page.about}
        eyebrow="Blog"
        title="Blog Grid - Our Blogs"
        description="A mobile article feed that takes inspiration from the web grid and turns it into full-width reading cards."
      />

      <SectionTitle
        eyebrow="Stories"
        title="Fresh reading for buyers, renters, and investors"
        subtitle="Longer headlines, stronger spacing, and vertical cards fit the mobile reading experience much better than the desktop grid."
      />
      {blogPosts.map((item) => (
        <BlogCard key={item.id} item={item} />
      ))}

      <ActionCard
        title="Want to turn a blog lead into a conversation?"
        description="Open the contact screen and route readers toward the support team."
        buttonLabel="Start A Conversation"
        onPress={() => onNavigate("contact")}
      />
    </ScreenLayout>
  );
}
