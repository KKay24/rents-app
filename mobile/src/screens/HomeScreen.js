import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const categories = [
  { id: 1, name: "Apartments", icon: "office-building", color: "#e8f5e9", iconColor: "#27ae60" },
  { id: 2, name: "Independent House", icon: "home-variant", color: "#e8f5e9", iconColor: "#27ae60" },
  { id: 3, name: "Car Rentals", icon: "car", color: "#e3f2fd", iconColor: "#2196f3" },
  { id: 4, name: "PG / Shared Rooms", icon: "bed", color: "#e8f5e9", iconColor: "#27ae60" },
  { id: 5, name: "Commercial Spaces", icon: "storefront", color: "#e8f5e9", iconColor: "#27ae60" },
];

const recommended = [
  {
    id: 1,
    title: "2 BHK Apartment",
    location: "Kabulonga, Lusaka",
    price: "K15,000",
    period: "/ month",
    beds: 2,
    baths: 2,
    sqft: 850,
    image: require("../../assets/new/prop1.png"),
    verified: true,
  },
  {
    id: 2,
    title: "1 BHK Apartment",
    location: "Riverside, Kitwe",
    price: "K8,000",
    period: "/ month",
    beds: 1,
    baths: 1,
    sqft: 600,
    image: require("../../assets/new/prop2.png"),
    verified: true,
  },
];

export default function HomeScreen({ onNavigate }) {
  const insets = useSafeAreaInsets();

  const handleCategoryPress = (name) => {
    if (name === "Car Rentals") {
      onNavigate("cars");
    }
  };

  return (
    <ScrollView 
      style={[styles.container, { paddingTop: insets.top }]} 
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.locationLabel}>Current Location</Text>
          <TouchableOpacity style={styles.locationRow}>
            <Ionicons name="location-sharp" size={18} color="#27ae60" />
            <Text style={styles.locationText}>Lusaka, Zambia</Text>
            <Feather name="chevron-down" size={16} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Feather name="bell" size={22} color="#333" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroTextContent}>
          <Text style={styles.heroTitle}>
            Find Your Next{"\n"}Perfect <Text style={styles.greenText}>Home</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Explore verified rentals that{"\n"}fit your lifestyle.
          </Text>
        </View>
        <Image
          source={require("../../assets/new/hero.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#666" />
          <TextInput
            placeholder="Search by locality, property or keyword"
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterBtn}>
            <MaterialCommunityIcons name="tune-variant" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Browse by Category</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
      >
        {categories.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(item.name)}
          >
            <View style={[styles.categoryIconContainer, { backgroundColor: item.color }]}>
              <MaterialCommunityIcons name={item.icon} size={28} color={item.iconColor} />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recommended */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recommendedList}
      >
        {recommended.map((item) => (
          <TouchableOpacity key={item.id} style={styles.propertyCard}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.propertyImage} />
              <View style={styles.badgeContainer}>
                <View style={styles.verifiedBadge}>
                  <Ionicons name="checkmark-circle" size={14} color="#fff" />
                  <Text style={styles.verifiedText}>Verified</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.favoriteBtn}>
                <Ionicons name="heart-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.propertyInfo}>
              <Text style={styles.propertyTitle}>{item.title}</Text>
              <View style={styles.locationPinRow}>
                <Ionicons name="location-outline" size={14} color="#666" />
                <Text style={styles.propertyLocation}>{item.location}</Text>
              </View>
              <Text style={styles.priceContainer}>
                <Text style={styles.priceText}>{item.price}</Text>
                <Text style={styles.periodText}>{item.period}</Text>
              </Text>
              <View style={styles.specsRow}>
                <View style={styles.specItem}>
                  <MaterialCommunityIcons name="bed-outline" size={16} color="#666" />
                  <Text style={styles.specText}>{item.beds}</Text>
                </View>
                <View style={styles.specItem}>
                  <MaterialCommunityIcons name="shower-outline" size={16} color="#666" />
                  <Text style={styles.specText}>{item.baths}</Text>
                </View>
                <View style={styles.specItem}>
                  <MaterialCommunityIcons name="arrow-expand-all" size={16} color="#666" />
                  <Text style={styles.specText}>{item.sqft} sq.ft</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Verified Banner */}
      <View style={styles.verifiedBanner}>
        <View style={styles.bannerContent}>
          <View style={styles.bannerHeader}>
            <View style={styles.shieldIcon}>
              <Ionicons name="shield-checkmark" size={24} color="#fff" />
            </View>
            <Text style={styles.bannerTitle}>Verified Properties</Text>
          </View>
          <Text style={styles.bannerSubtitle}>
            All properties are checked for{"\n"}quality and authenticity.
          </Text>
        </View>
        <Image
          source={require("../../assets/new/shield.png")}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  locationLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    marginHorizontal: 4,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationDot: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#27ae60",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  heroSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  heroTextContent: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a1a1a",
    lineHeight: 34,
  },
  greenText: {
    color: "#27ae60",
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    lineHeight: 20,
  },
  heroImage: {
    width: width * 0.45,
    height: 180,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },
  filterBtn: {
    padding: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#27ae60",
    fontWeight: "600",
  },
  categoriesList: {
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 30,
  },
  categoryCard: {
    width: 100,
    marginRight: 10,
    alignItems: "center",
  },
  categoryIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    fontWeight: "500",
  },
  recommendedList: {
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 30,
  },
  propertyCard: {
    width: width * 0.75,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 180,
  },
  propertyImage: {
    width: "100%",
    height: "100%",
  },
  badgeContainer: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(39, 174, 96, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  verifiedText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 4,
  },
  favoriteBtn: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  propertyInfo: {
    padding: 15,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 6,
  },
  locationPinRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  propertyLocation: {
    fontSize: 13,
    color: "#666",
    marginLeft: 4,
  },
  priceContainer: {
    marginBottom: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#27ae60",
  },
  periodText: {
    fontSize: 13,
    color: "#999",
  },
  specsRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  specItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  specText: {
    fontSize: 13,
    color: "#666",
    marginLeft: 6,
    fontWeight: "500",
  },
  verifiedBanner: {
    flexDirection: "row",
    backgroundColor: "#f0f9f4",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bannerContent: {
    flex: 1,
  },
  bannerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  shieldIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#27ae60",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  bannerSubtitle: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
  bannerImage: {
    width: 100,
    height: 80,
    marginLeft: 10,
  },
});
