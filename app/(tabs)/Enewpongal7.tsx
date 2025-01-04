import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Enewpongal7() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>How to Make Pongal</Text>
      </View>

      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Pongal is a special dish of Tamil Nadu. It is a traditional recipe prepared during the Pongal festival to express gratitude to the Sun and nature. 
          Two types of Pongal are very popular:{"\n"}
          - Ven Pongal (Savory Pongal) {"\n"}
          - Sakkarai Pongal (Sweet Pongal)
        </Text>
      </View>

      {/* Ingredients Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Ingredients</Text>
        <Text style={styles.description}>
          **For Sakkarai Pongal:**{"\n"}
          - Raw Rice - 1 cup {"\n"}
          - Milk - 2 cups {"\n"}
          - Jaggery - 1 cup {"\n"}
          - Cardamom - 2 {"\n"}
          - Grated Coconut - 2 teaspoons {"\n"}
          - Ghee - 2 teaspoons {"\n"}
          - Cashews and Raisins{"\n\n"}

          **For Ven Pongal:**{"\n"}
          - Raw Rice - 1 cup {"\n"}
          - Moong Dal - 1/4 cup {"\n"}
          - Water - 3 cups {"\n"}
          - Ghee - 2 teaspoons {"\n"}
          - Pepper, Cumin - a small amount {"\n"}
          - Curry Leaves - a few
        </Text>
      </View>

      {/* Preparation Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Preparation - Sakkarai Pongal</Text>
        <Text style={styles.description}>
          1. First, wash the rice and moong dal thoroughly and set aside.{"\n"}
          2. Boil milk and water in a clay pot, and cook the rice and dal mixture.{"\n"}
          3. Dissolve jaggery in a little water, strain it, and add it to the cooked rice.{"\n"}
          4. Add ghee, cardamom, cashews, and raisins, mix well, and remove from heat.{"\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparation - Ven Pongal</Text>
        <Text style={styles.description}>
          1. Dry roast the moong dal in ghee until aromatic.{"\n"}
          2. Cook the rice and roasted dal in water until soft.{"\n"}
          3. Add ghee, pepper, cumin, and curry leaves to the cooked mixture.{"\n"}
          4. Garnish with fried cashews and serve.{"\n"}
        </Text>
      </View>

      {/* Serving Suggestions */}
      <View style={styles.section}>
        <Text style={styles.title}>Serving Suggestions</Text>
        <Text style={styles.description}>
          - Serve Sakkarai Pongal with a drizzle of ghee.{"\n"}
          - Serve Ven Pongal with coconut chutney and sambar.{"\n"}
          - Serving Pongal with sugarcane and banana leaves adds a festive touch.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          May your Pongal celebrations be filled with delicious dishes and joy!
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
