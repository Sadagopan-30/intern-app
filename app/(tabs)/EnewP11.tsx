import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function EnewP11() {
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
          Pongal is the primary harvest festival of Tamil Nadu. It is a time of gratitude, sharing joy, and celebrating tradition. Pongal is celebrated over four days, with each day having unique features.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Special Pongal Dishes</Text>
        <Text style={styles.description}>
          - **Sweet Pongal:** A sweet dish made with jaggery, rice, and ingredients.{"\n"}
          - **Savory Pongal:** A delicious dish made with milk and turmeric powder.{"\n"}
          - **Fried Snacks:** Items like potato chips and banana chips.{"\n"}
          - **Traditional Porridges:** Various rice-based porridges and snacks.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Traditional Games</Text>
        <Text style={styles.description}>
          Games played during Pongal in Tamil Nadu:{"\n\n"}
          - **Uriyadi:** A game where participants try to break a pot to win prizes.{"\n"}
          - **Bull Taming:** An adventurous sport involving taming bulls.{"\n"}
          - **Cattle Decoration:** Decorating cattle with vibrant colors and traditional attire.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Decorations and Customs</Text>
        <Text style={styles.description}>
          - **Kolam at Doorsteps:** Beautiful designs made with turmeric colors and flowers.{"\n"}
          - **Traditional Decorations:** Houses and cattle sheds decorated with mango leaves.{"\n"}
          - **Silver and Copper Vessels:** Traditional utensils used for cooking and rituals.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Family Gatherings</Text>
        <Text style={styles.description}>
          - **Shared Meals:** Eating Pongal dishes with family members.{"\n"}
          - **Gift Exchange:** The custom of exchanging new items.{"\n"}
          - **Celebratory Events:** Enjoying cultural performances and entertainment with family.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Special Markets</Text>
        <Text style={styles.description}>
          Special markets for Pongal:{"\n\n"}
          - **Sugarcane Market:** Special places to buy sugarcane.{"\n"}
          - **Traditional Attire:** Men wear dhotis, and women wear sarees.{"\n"}
          - **Handloom Products:** Traditional handloom and household items.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you and your family a happy and prosperous Pongal celebration!
        </Text>
      </View>
    </ScrollView>
  );
}

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
