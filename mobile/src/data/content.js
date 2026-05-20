import { images } from "../constants/images";

export const navigationItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "blog", label: "Blog" },
  { key: "pricing", label: "Pricing" },
  { key: "contact", label: "Contact" },
];

export const heroFields = [
  { label: "City / Street", placeholder: "Location" },
  { label: "Property Type", placeholder: "Apartment, villa, office" },
  { label: "Price Range", placeholder: "K2,000 - K10,000" },
];

export const featuredTypes = [
  { name: "Family House", total: "122 properties", image: images.hero.h1 },
  { name: "House & Villa", total: "155 properties", image: images.hero.h2 },
  { name: "Apartment", total: "300 properties", image: images.hero.h3 },
  { name: "Office & Studio", total: "80 properties", image: images.hero.h4 },
  { name: "Villa & Condo", total: "80 properties", image: images.hero.h6 },
];

export const listings = [
  {
    id: "1",
    image: images.list.p1,
    name: "Red Carpet Real Estate",
    location: "210 Bishops Road, Kabulonga",
    category: "For Rent",
    price: "K3,700",
    type: "Apartment",
  },
  {
    id: "2",
    image: images.list.p2,
    name: "Fairmount Properties",
    location: "5698 Riverside Drive, Kitwe",
    category: "For Sale",
    price: "K9,750",
    type: "Condos",
  },
  {
    id: "3",
    image: images.list.p7,
    name: "The Real Estate Corner",
    location: "5624 Cairo Road, Lusaka",
    category: "For Rent",
    price: "K5,860",
    type: "Offices",
  },
  {
    id: "4",
    image: images.list.p4,
    name: "Herringbone Realty",
    location: "5621 Mosi-oa-Tunya Road, Livingstone",
    category: "For Sale",
    price: "K7,540",
    type: "Homes & Villas",
  },
  {
    id: "5",
    image: images.list.p5,
    name: "Brick Lane Realty",
    location: "210 Independence Avenue, Ndola",
    category: "For Rent",
    price: "K4,850",
    type: "Commercial",
  },
  {
    id: "6",
    image: images.list.p6,
    name: "Banyon Tree Realty",
    location: "210 Kansanshi Road, Solwezi",
    category: "For Sale",
    price: "K2,742",
    type: "Apartment",
  },
];

export const awards = [
  { value: "32M", label: "Blue Burmin Award" },
  { value: "43M", label: "Mimo X11 Award" },
  { value: "51M", label: "Australian UGC Award" },
  { value: "42M", label: "IITCA Green Award" },
];

export const locations = [
  {
    id: "1",
    name: "Kabulonga, Lusaka",
    villas: "12 Villas",
    apartments: "10 Apartments",
    offices: "07 Offices",
    image: images.location.c1,
  },
  {
    id: "2",
    name: "Riverside, Kitwe",
    villas: "12 Villas",
    apartments: "10 Apartments",
    offices: "07 Offices",
    image: images.location.c2,
  },
  {
    id: "3",
    name: "Kansenshi, Ndola",
    villas: "12 Villas",
    apartments: "10 Apartments",
    offices: "07 Offices",
    image: images.location.c3,
  },
  {
    id: "4",
    name: "Mukuni, Livingstone",
    villas: "12 Villas",
    apartments: "10 Apartments",
    offices: "07 Offices",
    image: images.location.c4,
  },
  {
    id: "5",
    name: "Kansanshi, Solwezi",
    villas: "12 Villas",
    apartments: "10 Apartments",
    offices: "07 Offices",
    image: images.location.c5,
  },
  {
    id: "6",
    name: "Nkana East, Kitwe",
    villas: "12 Villas",
    apartments: "10 Apartments",
    offices: "07 Offices",
    image: images.location.c6,
  },
];

export const agents = [
  {
    id: "1",
    listings: "50 Listings",
    image: images.customer.t1,
    address: "Lusaka, Zambia",
    name: "Mwape Mumba",
    channels: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
  },
  {
    id: "2",
    listings: "70 Listings",
    image: images.customer.t2,
    address: "Kitwe, Zambia",
    name: "Bwalya Chanda",
    channels: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
  },
  {
    id: "3",
    listings: "80 Listings",
    image: images.customer.t3,
    address: "Ndola, Zambia",
    name: "Mutinta Tembo",
    channels: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
  },
  {
    id: "4",
    listings: "51 Listings",
    image: images.customer.t4,
    address: "Livingstone, Zambia",
    name: "Chanda Banda",
    channels: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
  },
];

export const plans = [
  {
    plan: "Basic",
    price: "29",
    note: "per user, per month",
    bestValue: false,
    features: [
      { text: "99.5% uptime guarantee", included: true },
      { text: "120GB CDN bandwidth", included: true },
      { text: "5GB cloud storage", included: true },
      { text: "Personal help support", included: false },
      { text: "Enterprise SLA", included: false },
    ],
  },
  {
    plan: "Standard",
    price: "49",
    note: "per user, per month",
    bestValue: true,
    features: [
      { text: "99.5% uptime guarantee", included: true },
      { text: "150GB CDN bandwidth", included: true },
      { text: "10GB cloud storage", included: true },
      { text: "Personal help support", included: true },
      { text: "Enterprise SLA", included: false },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    note: "2 users, per month",
    bestValue: false,
    features: [
      { text: "100% uptime guarantee", included: true },
      { text: "200GB CDN bandwidth", included: true },
      { text: "20GB cloud storage", included: true },
      { text: "Personal help support", included: true },
      { text: "Enterprise SLA", included: true },
    ],
  },
];

export const serviceHighlights = [
  {
    title: "Property discovery",
    description:
      "Browse a curated mobile catalog of family homes, villas, apartments, offices, and commercial spaces.",
  },
  {
    title: "Agent connection",
    description:
      "Reach featured agents quickly with mobile-friendly contact actions and location context.",
  },
  {
    title: "Pricing clarity",
    description:
      "Compare service plans and key benefits in a compact format that fits smaller screens cleanly.",
  },
];

export const blogPosts = [
  {
    id: "1",
    image: images.list.p4,
    category: "Market Watch",
    readTime: "4 min read",
    title: "What first-time buyers should compare before booking a viewing",
    excerpt:
      "A mobile-friendly checklist for price, neighborhood fit, service charges, and resale potential.",
  },
  {
    id: "2",
    image: images.list.p2,
    category: "Investment",
    readTime: "6 min read",
    title: "Why mixed-use properties keep showing up in high-demand searches",
    excerpt:
      "Commercial flexibility, walkable locations, and longer occupancy cycles are driving renewed interest.",
  },
  {
    id: "3",
    image: images.list.p6,
    category: "Tips",
    readTime: "3 min read",
    title: "Small upgrades that make rental listings feel more premium on mobile",
    excerpt:
      "Photography, clean amenities lists, and concise descriptions improve trust before the first conversation.",
  },
];

export const aboutStory = {
  title: "Our agency story",
  subtitle: "Check out our company story and work process.",
  paragraphs: [
    "We help buyers, renters, and investors discover homes that match both their budget and lifestyle, with a presentation style designed to feel quick and clear on mobile.",
    "This Expo version adapts the original web experience into a touch-friendly interface with card layouts, scrollable sections, and simplified actions for iOS and Android users.",
  ],
};

export const contactDetails = [
  {
    title: "Email support",
    value: "support@rentapp.com",
    description: "Questions about listings, pricing, or agent availability.",
  },
  {
    title: "Phone line",
    value: "+1 (800) 555-0198",
    description: "Reach the team during standard business hours.",
  },
  {
    title: "Office hours",
    value: "Mon - Sat, 08:00 - 18:00",
    description: "Fast replies for both Android and iOS customers.",
  },
];
