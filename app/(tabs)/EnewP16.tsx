import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function EnewP16() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Jallikattu Festival Guide</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Jallikattu is a traditional and culturally significant sport of Tamils, reflecting bravery and art. 
          It is celebrated as part of the Pongal festival, emphasizing the importance of cattle and agriculture.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparation</Text>
        <Text style={styles.description}>
          Preparations for Jallikattu:{"\n\n"}
          1. **Preparing the bulls:** Ensure the health and care of the cattle.{"\n\n"}
          2. **Race track setup:** Establish a safe race track at the venue.{"\n\n"}
          3. **Participants:** Register skilled players and provide proper guidance.{"\n\n"}
          4. **Shared meals:** Enjoy traditional meals shared among everyone.{"\n\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Jallikattu Event</Text>
        <Text style={styles.description}>
          Key events of Jallikattu day:{"\n\n"}
          1. **Parading the bulls:** Bulls are brought to the festival site in a ceremonial procession.{"\n\n"}
          2. **Other events:** Traditional music and dance performances precede the main event.{"\n\n"}
          3. **Showcasing bravery:** Participants demonstrate their skills by taming the bulls.{"\n\n"}
          4. **Festival conclusion:** Prizes are awarded to the participants and bulls.{"\n\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Significance of Tradition</Text>
        <Text style={styles.description}>
          Highlights of Jallikattu Festival:{"\n\n"}
          - **Importance of cattle:** It emphasizes the significance of cattle in agriculture and Tamil life.{"\n"}
          - **Showcasing bravery:** The event celebrates the courage and valor of the younger generation.{"\n"}
          - **Community unity:** A festival where everyone comes together to celebrate.{"\n"}
          - **Art and heritage:** Jallikattu is a globally recognized part of Tamil culture.{"\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festival Conclusion</Text>
        <Text style={styles.description}>
          Jallikattu Festival concludes joyfully:{"\n\n"}
          1. **Victory of participants:** Celebrating the skills and bravery of those involved.{"\n\n"}
          2. **Strengthening bonds:** A time to share happiness and strengthen social relationships.{"\n\n"}
          3. **Contentment:** A sense of fulfillment in preserving tradition.{"\n\n"}
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Best wishes to all participants of the Jallikattu event! May this festival bring joy and prosperity to your life!
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
    backgroundColor: "#f44336",
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
    color: "#b71c1c",
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
    color: "#d32f2f",
    fontStyle: "italic",
  },
});
