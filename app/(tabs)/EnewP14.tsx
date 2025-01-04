import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function EnewP14() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mattu Pongal Festival Guidelines</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Mattu Pongal is celebrated as the third day of the traditional Tamil festival. 
          It is a day dedicated to honoring the significance of cattle, which are an integral part of agriculture. 
          This festival reflects gratitude and respect for farming and cattle.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparations</Text>
        <Text style={styles.description}>
          Preparations for Mattu Pongal:{"\n\n"}
          1. **Decorating Cattle:** Clean the cattle, give them a bath, and decorate them with vibrant colors and ornaments.{"\n\n"}
          2. **Kolam Garland:** Adorn the cattle's horns with garlands made of *kolam* flowers.{"\n\n"}
          3. **Rice Pongal:** Cook rice Pongal specially prepared for the cattle.{"\n\n"}
          4. **Home Decoration:** Decorate the front yard with kolams (traditional designs) and festival symbols.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Mattu Pongal Rituals</Text>
        <Text style={styles.description}>
          Rituals observed during Mattu Pongal:{"\n\n"}
          1. **Cattle Worship:** Sprinkle turmeric water on the cattle, break a pumpkin to ward off evil spirits.{"\n\n"}
          2. **Offering Rice Pongal:** Serve rice Pongal to the cattle as a gesture of gratitude.{"\n\n"}
          3. **Letting Cattle Roam:** Allow the cattle to roam through the village, which is considered a tradition.{"\n\n"}
          4. **Honoring Cattle Together:** Communities come together to show love and gratitude towards the cattle.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Highlights</Text>
        <Text style={styles.description}>
          Highlights of Mattu Pongal celebrations:{"\n\n"}
          - **Jallikattu:** In some regions, cattle competitions like Jallikattu are held.{"\n"}
          - **Cattle Parade:** Decorated cattle are paraded through the village.{"\n"}
          - **Community Feast:** Families and friends share meals together, strengthening bonds.{"\n"}
          - **Agricultural Heritage:** Events are held to honor farming traditions and the importance of cattle.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Significance of Mattu Pongal</Text>
        <Text style={styles.description}>
          Spiritual and social significance of Mattu Pongal:{"\n\n"}
          - **Honoring Cattle:** A day to highlight the vital role of cattle in agriculture.{"\n"}
          - **Gratitude to Workers:** Appreciating the contributions of workers supported by cattle.{"\n"}
          - **Nature's Value:** Emphasizes the importance of all living beings in the ecosystem.{"\n"}
          - **Social Bonding:** Strengthens relationships by bringing family and friends together.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Conclusion of the Festival</Text>
        <Text style={styles.description}>
          Mattu Pongal celebrations end on a joyous note:{"\n\n"}
          1. **Prayer:** Express gratitude for the hard work of cattle and everything they contribute to our lives.{"\n\n"}
          2. **Community Feast:** Share food to spread happiness and unity.{"\n\n"}
          3. **Environmental Awareness:** Ensure cleanliness and care for the environment post-celebration.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you a joyful Mattu Pongal filled with happiness, gratitude, and prosperity!
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
