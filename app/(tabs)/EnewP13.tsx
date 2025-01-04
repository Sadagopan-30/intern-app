import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function EnewP13() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thai Pongal Festival Guidelines</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Thai Pongal is one of the most important festivals for Tamils. It is celebrated as the second day of the Pongal festival. This festival, which honors agriculture, marks the beginning of a new season filled with gratitude and prosperity.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparations</Text>
        <Text style={styles.description}>
          Preparations for Thai Pongal:{"\n\n"}
          1. **Home Decoration:** Clean the house and draw beautiful kolams (traditional designs) to prepare for the festival.{"\n\n"}
          2. **Pongal Ingredients:** Get items like milk, rice, palm jaggery, split chickpeas, cashews, and cardamom ready.{"\n\n"}
          3. **Cooking Area:** Decorate the courtyard with colorful fabrics and set up a clay stove for cooking Pongal.{"\n\n"}
          4. **Pongal Pot:** Use traditional brass or clay pots to cook Pongal.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>How to Cook Pongal</Text>
        <Text style={styles.description}>
          The process of cooking and rituals during Thai Pongal:{"\n\n"}
          1. **Boiling Milk:** The main event of Pongal is letting the milk boil over, while chanting "Pongalo Pongal!" to express joy.{"\n\n"}
          2. **Cooking Pongal:** Add rice, palm jaggery, lentils, and other ingredients to prepare Pongal.{"\n\n"}
          3. **Worship:** Offer the prepared Pongal to the Sun God along with sugarcane, bananas, and ghee.{"\n\n"}
          4. **Sharing Prasadam:** Distribute the cooked Pongal to everyone as a token of celebration.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Highlights</Text>
        <Text style={styles.description}>
          Highlights of Thai Pongal celebrations:{"\n\n"}
          - **Kolam Competitions:** Participate in contests for creating beautiful kolams.{"\n"}
          - **Honoring Farmers:** Events are conducted to appreciate the significance of farmers.{"\n"}
          - **Family Gathering:** Families come together to celebrate with happiness.{"\n"}
          - **Sharing Meals:** Share food with neighbors and relatives to enhance the joy of the festival.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Significance of Pongal</Text>
        <Text style={styles.description}>
          Spiritual and social importance of Thai Pongal:{"\n\n"}
          - **Honoring Farmers:** A day to acknowledge and respect the hard work of farmers.{"\n"}
          - **Expressing Gratitude:** A day to thank nature and the Sun God for their blessings.{"\n"}
          - **New Beginnings:** Marks the start of a prosperous and auspicious period.{"\n"}
          - **Cultural Pride:** Revives the traditions and heritage of Tamil culture.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Conclusion</Text>
        <Text style={styles.description}>
          Thai Pongal concludes on a joyful note:{"\n\n"}
          1. **Prayer:** Offer gratitude to the divine for the happiness experienced throughout the day.{"\n\n"}
          2. **Communal Feast:** Share Pongal dishes with relatives and neighbors.{"\n\n"}
          3. **Environmental Awareness:** Ensure cleanliness of the surroundings after the celebration.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you a joyful Thai Pongal filled with gratitude and prosperity!
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
    backgroundColor: "#4caf50",
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
    color: "#388e3c",
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
