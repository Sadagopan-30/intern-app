import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const EngP11 = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Special Features of Pongal</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Pongal is the primary harvest festival of Tamils. It is a time for gratitude, sharing joy, and celebrating traditions. Pongal is celebrated over four days, each with unique characteristics.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Special Dishes of Pongal</Text>
        <Text style={styles.description}>
          - **Sakkarai Pongal:** A sweet dish made with jaggery, rice, and vegetables.{"\n"}
          - **Ven Pongal:** A savory dish made with milk and turmeric powder.{"\n"}
          - **Fried Items:** Includes dishes like potato and banana fry.{"\n"}
          - **Varieties of Porridge:** Traditional rice-based dishes and snacks.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Traditional Games</Text>
        <Text style={styles.description}>
          Games commonly played in Tamil Nadu during Pongal:{"\n\n"}
          - **Uriyadi:** Players try to break a pot to win prizes.{"\n"}
          - **Jallikattu:** A daring sport of taming bulls.{"\n"}
          - **Cattle Decoration:** Cattle are adorned with colors and traditional attire.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Decorations and Customs</Text>
        <Text style={styles.description}>
          - **Kolam (Rangoli):** Beautiful designs with turmeric colors and flowers.{"\n"}
          - **Mangala Decorations:** Decorating cattle sheds and homes with mango leaves.{"\n"}
          - **Silver and Copper Utensils:** Traditional vessels for rituals and food.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Family Gatherings</Text>
        <Text style={styles.description}>
          - **Sharing Meals:** Pongal meals enjoyed with relatives.{"\n"}
          - **Gift Exchange:** Exchanging new household items.{"\n"}
          - **Festive Events:** Enjoying cultural performances and entertainment with family.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Special Markets</Text>
        <Text style={styles.description}>
          Special markets for Pongal:{"\n\n"}
          - **Sugarcane Market:** Dedicated spaces for buying sugarcane.{"\n"}
          - **Traditional Attire:** Men wear dhotis, and women wear sarees.{"\n"}
          - **Handcrafted Items:** Traditional handloom and household items.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you and your family happiness and prosperity this Pongal festival!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e1",
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: "#ff9800",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#d84315",
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  footer: {
    marginVertical: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    color: "#6a1b9a",
    fontStyle: "italic",
  },
});

export default EngP11;
