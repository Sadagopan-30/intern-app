import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Enewpongal6() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Steps for Worship During Pongal</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Pongal is a significant harvest festival in Tamil Nadu. It is a time to thank the Sun, nature, and cattle for their contributions. Pongal is celebrated over four days:{"\n\n"}
          - **Bhogi Pongal:** The day to discard old things and welcome the new.{"\n"}
          - **Thai Pongal:** The main day dedicated to the Sun.{"\n"}
          - **Mattu Pongal:** A day to thank the cattle for their help in agriculture.{"\n"}
          - **Kaanum Pongal:** A day to rejoice and spend time with family.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparation</Text>
        <Text style={styles.description}>
          Things to do before Pongal worship:{"\n\n"}
          1. **Cleaning:** Thoroughly clean the house and draw **kolam** (rangoli) at the entrance. Decorate the worship area with flowers.{"\n\n"}
          2. **Decoration:** Place images of the Sun and other deities in the worship area and decorate with mango leaves.{"\n\n"}
          3. **Offerings:** Gather new rice, milk, jaggery, sugarcane, coconut, betel leaves, and other items for the rituals.{"\n\n"}
          4. **Traditional attire:** Wear traditional clothing like dhoti for men and saree for women.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Worship Procedure</Text>
        <Text style={styles.description}>
          Steps for worshipping the Sun:{"\n\n"}
          1. **Lighting the lamp:** Begin the worship by lighting a lamp, symbolizing the invocation of divine energy.{"\n\n"}
          2. **Cooking Pongal:** Prepare **ven Pongal** (savory Pongal) and **sakkarai Pongal** (sweet Pongal) in a new clay pot. When the milk overflows, chant “Pongalo Pongal!”{"\n\n"}
          3. **Offering to the Sun:** Offer Pongal, sugarcane, and flowers to the Sun.{"\n\n"}
          4. **Prayers:** Face east, bow to the Sun, and express gratitude. Recite **Aditya Hridayam** or Tamil prayers.{"\n\n"}
          5. **Special worship for cattle:** Adorn cattle with garlands, apply colors, and feed them Pongal as a token of gratitude.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Celebration Highlights</Text>
        <Text style={styles.description}>
          Pongal festival is a joyous occasion:{"\n\n"}
          - **Traditional games:** Participate in activities like **Uriyadi** and bull-taming contests.{"\n"}
          - **Cultural events:** Perform dances like **kummi** and sing songs.{"\n"}
          - **Sharing food:** Distribute Pongal to relatives and those in need.{"\n"}
          - **Family reunions:** Exchange gifts and spend time with loved ones.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Significance of Worship</Text>
        <Text style={styles.description}>
          The worship during Pongal has spiritual and traditional importance:{"\n\n"}
          - **Gratitude to nature:** Thanking the Sun, rain, and the Earth.{"\n"}
          - **New beginnings:** Removing the old to welcome the new.{"\n"}
          - **Unity:** Sharing happiness with family and the community.{"\n"}
          - **Acknowledging farmers:** Honoring the efforts of farmers and cattle.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Conclusion</Text>
        <Text style={styles.description}>
          Conclude the worship peacefully:{"\n\n"}
          1. **Sharing prasadam:** Distribute the Pongal dish among family and friends.{"\n\n"}
          2. **Spend time with family:** Enjoy traditional meals and participate in games.{"\n\n"}
          3. **Evening prayer:** Light a lamp in the evening and express gratitude for the day's blessings.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you and your family a joyous and prosperous Pongal filled with happiness and gratitude!
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
