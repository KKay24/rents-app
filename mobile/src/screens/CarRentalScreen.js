import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
  Platform,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";

const { width } = Dimensions.get("window");

export default function CarRentalScreen({ onNavigate }) {
  const insets = useSafeAreaInsets();
  const [cars, setCars] = useState([
    {
      id: "1",
      make: "Toyota",
      model: "Land Cruiser",
      category: "SUV",
      pricePerDay: 2500,
      seats: 7,
      transmission: "AUTOMATIC",
      fuelType: "DIESEL",
      images: [{ fileUrl: "https://images.unsplash.com/photo-1594976612316-4012cbd439d7?auto=format&fit=crop&q=80&w=1000" }],
    },
    {
      id: "2",
      make: "Mercedes-Benz",
      model: "C-Class",
      category: "LUXURY",
      pricePerDay: 3500,
      seats: 5,
      transmission: "AUTOMATIC",
      fuelType: "PETROL",
      images: [{ fileUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000" }],
    }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const baseUrl = 'http://172.22.11.226:5001';
      // Set a short timeout for better UX
      const response = await axios.get(`${baseUrl}/api/cars`, { timeout: 5000 });
      if (response.data && response.data.length > 0) {
        setCars(response.data);
      }
    } catch (error) {
      console.log("Background fetch failed, using fallback data.");
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate("home")} style={styles.backBtn}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Car Rentals</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.promoBanner}>
          <View style={styles.promoText}>
            <Text style={styles.promoTitle}>Summer Deal!</Text>
            <Text style={styles.promoSubtitle}>Get 20% off on all SUV rentals this month.</Text>
          </View>
          <MaterialCommunityIcons name="car-back" size={60} color="#fff" />
        </View>

        <View style={styles.filterRow}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["All", "SUV", "Luxury", "Economy", "Electric"].map((cat) => (
              <TouchableOpacity key={cat} style={[styles.filterChip, cat === "All" && styles.activeChip]}>
                <Text style={[styles.chipText, cat === "All" && styles.activeChipText]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {cars.map((car) => (
            <TouchableOpacity key={car.id} style={styles.carCard}>
              <View style={styles.imageContainer}>
                <Image
                  source={car.images && car.images.length > 0 
                    ? { uri: car.images[0].fileUrl.startsWith('http') 
                        ? car.images[0].fileUrl 
                        : `http://172.22.11.226:5001${car.images[0].fileUrl}` 
                      } 
                    : { uri: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000" }}
                  style={styles.carImage}
                  resizeMode="cover"
                />
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{car.category}</Text>
                </View>
              </View>
              <View style={styles.carInfo}>
                <View style={styles.titleRow}>
                  <Text style={styles.carName}>{car.make} {car.model}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#f1c40f" />
                    <Text style={styles.ratingText}>4.8</Text>
                  </View>
                </View>

                <View style={styles.specsRow}>
                  <View style={styles.specItem}>
                    <MaterialCommunityIcons name="account-group-outline" size={16} color="#666" />
                    <Text style={styles.specText}>{car.seats} Seats</Text>
                  </View>
                  <View style={styles.specItem}>
                    <MaterialCommunityIcons name="cog-outline" size={16} color="#666" />
                    <Text style={styles.specText}>{car.transmission}</Text>
                  </View>
                  <View style={styles.specItem}>
                    <MaterialCommunityIcons name="gas-station-outline" size={16} color="#666" />
                    <Text style={styles.specText}>{car.fuelType}</Text>
                  </View>
                </View>

                <View style={styles.priceRow}>
                  <View>
                    <Text style={styles.priceValue}>K{car.pricePerDay}</Text>
                    <Text style={styles.priceLabel}>per day</Text>
                  </View>
                  <TouchableOpacity style={styles.bookBtn}>
                    <Text style={styles.bookBtnText}>Rent Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  scrollContent: {
    padding: 20,
  },
  promoBanner: {
    flexDirection: "row",
    backgroundColor: "#27ae60",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 25,
  },
  promoText: {
    flex: 1,
  },
  promoTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },
  promoSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
  },
  filterRow: {
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  activeChip: {
    backgroundColor: "#27ae60",
    borderColor: "#27ae60",
  },
  chipText: {
    color: "#666",
    fontWeight: "600",
  },
  activeChipText: {
    color: "#fff",
  },
  carCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  imageContainer: {
    height: 180,
    width: "100%",
  },
  carImage: {
    width: "100%",
    height: "100%",
  },
  categoryBadge: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#27ae60",
    textTransform: "uppercase",
  },
  carInfo: {
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
    marginLeft: 4,
  },
  specsRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  specItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  specText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 6,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 15,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#27ae60",
  },
  priceLabel: {
    fontSize: 12,
    color: "#999",
  },
  bookBtn: {
    backgroundColor: "#27ae60",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 12,
  },
  bookBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
