import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function EnewP12(){
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bhogi Festival Procedures</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Bhogi festival marks the first day of Pongal. On this day, old things are discarded, and a new life is embraced. It signifies rejuvenation and a fresh beginning.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparations</Text>
        <Text style={styles.description}>
          Preparations to be done before the Bhogi festival:{"\n\n"}
          1. **Cleaning the house:** Clean the entire house and remove old and unnecessary items.{"\n\n"}
          2. **Burning old items:** Create a new fire pit and burn old items in it. This symbolizes letting go of old burdens and embracing rejuvenation.{"\n\n"}
          3. **Drawing Kolam:** Draw beautiful Kolams (rangolis) at the entrance decorated with flowers as a tribute to the Sun God.{"\n\n"}
          4. **Wearing traditional attire:** Wear traditional outfits to celebrate the festival.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Pooja Rituals</Text>
        <Text style={styles.description}>
          Worship procedures on Bhogi day:{"\n\n"}
          1. **Lighting lamps:** Light lamps in front of the deity to begin the pooja.{"\n\n"}
          2. **Offering vegetables:** Prepare vegetarian food on an earthen or stone stove and offer it to the deity.{"\n\n"}
          3. **Prayers:** Pray with the family to the Sun God and sing Tamil hymns or chants like Aditya Hridayam.{"\n\n"}
          4. **Sharing Prasad:** Share the prepared food with everyone.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Highlights</Text>
        <Text style={styles.description}>
          Bhogi day is celebrated in a joyous manner:{"\n\n"}
          - **Bonfire event:** Burn wood and other materials to symbolically remove stress and old burdens.{"\n"}
          - **Cultural events:** Traditional dances like **Kummi** and **Parai Melam** may be performed.{"\n"}
          - **Family gathering:** A day for family members to come together and rejoice.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Significance of Bhogi</Text>
        <Text style={styles.description}>
          Bhogi festival holds spiritual and social significance:{"\n\n"}
          - **Discarding the old:** It represents letting go of old habits and practices.{"\n"}
          - **New beginnings:** It inspires rejuvenation and welcoming new things.{"\n"}
          - **Unity:** Encourages spending quality time with family.{"\n"}
          - **Preserving traditions:** A chance to share and continue beautiful cultural practices.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Conclusion</Text>
        <Text style={styles.description}>
          At the end of Bhogi festival:{"\n\n"}
          1. **Sharing Prasad:** Share the food prepared on Bhogi day with everyone.{"\n\n"}
          2. **Community activities:** Ensure the environment is kept clean.{"\n\n"}
          3. **Evening rituals:** Light lamps in the evening and thank the deity for the joy received throughout the day.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you and your family a joyful, thankful, and prosperous Bhogi festival!
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
