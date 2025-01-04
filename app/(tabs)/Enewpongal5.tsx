import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Enewpongal5() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Happy Pongal Wishes 🎉</Text>
      </View>

      {/* Wishes Section 1 */}
      <View style={styles.section}>
        <Text style={styles.title}>First Wish</Text>
        <Text style={styles.description}>
          Wishing you a happy Pongal festival! May your life overflow with sweetness and prosperity!
        </Text>
      </View>

      {/* Wishes Section 2 */}
      <View style={styles.section}>
        <Text style={styles.title}>Second Wish</Text>
        <Text style={styles.description}>
          May this Pongal bring good health and happiness into your life! Best wishes!
        </Text>
      </View>

      {/* Wishes Section 3 */}
      <View style={styles.section}>
        <Text style={styles.title}>Third Wish</Text>
        <Text style={styles.description}>
          Let this new Pongal bring new hope to your family and friends! Happy Pongal Wishes!
        </Text>
      </View>

      {/* Wishes Section 4 */}
      <View style={styles.section}>
        <Text style={styles.title}>Fourth Wish</Text>
        <Text style={styles.description}>
          May your life overflow with well-being and happiness like the Pongal festival! Happy Pongal Wishes!
        </Text>
      </View>

      {/* Wishes Section 5 */}
      <View style={styles.section}>
        <Text style={styles.title}>Fifth Wish</Text>
        <Text style={styles.description}>
          Pongalo Pongal! May your home and heart overflow with joy and happiness. Wishing you a very Happy Pongal!
        </Text>
      </View>

      {/* Wishes Section 6 */}
      <View style={styles.section}>
        <Text style={styles.title}>Sixth Wish</Text>
        <Text style={styles.description}>
          We wish you the guidance of divine blessings all around! Happy Pongal Wishes!
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you a joyous Pongal festival! May your life be filled with prosperity and happiness!
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
    backgroundColor: "#f57c00",
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
    color: "#bf360c",
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
    color: "#d84315",
    fontStyle: "italic",
  },
});
