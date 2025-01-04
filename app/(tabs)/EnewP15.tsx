import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function EnewP15() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Guidelines for Celebrating Kaanum Pongal</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Kaanum Pongal is the fourth day of the Tamil Pongal festival. 
          It is considered a day to spend time with relatives and friends and enjoy the beauty of nature.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Preparation</Text>
        <Text style={styles.description}>
          Preparations for Kaanum Pongal:{"\n\n"}
          1. **Family Gatherings:** Arrange meetings with relatives and friends.{"\n\n"}
          2. **Outings:** Plan trips to scenic spots or holy places.{"\n\n"}
          3. **Shared Meals:** Prepare homemade food and share it with others.{"\n\n"}
          4. **Cultural Programs:** Organize events that showcase traditional arts.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Celebrations</Text>
        <Text style={styles.description}>
          Key events of Kaanum Pongal day:{"\n\n"}
          1. **Family Gatherings:** It is customary to come together with family and friends to celebrate joyfully.{"\n\n"}
          2. **Traditional Games:** Play traditional games like *sekkal* and *kabaddi*.{"\n\n"}
          3. **Nature Trips:** Travel to green landscapes to enjoy the comforts of nature.{"\n\n"}
          4. **Pilgrimage:** Visiting temples and seeking blessings is a significant activity.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Festive Highlights</Text>
        <Text style={styles.description}>
          Various aspects of Kaanum Pongal:{"\n\n"}
          - **Removing Ego:** A day to strengthen family relationships.{"\n"}
          - **Social Interactions:** A time to build and nurture connections.{"\n"}
          - **Traditional Music:** Folk music performances.{"\n"}
          - **Community Meals:** Events where shared meals bring happiness to everyone.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Significance</Text>
        <Text style={styles.description}>
          Social and spiritual importance of Kaanum Pongal:{"\n\n"}
          - **Strengthening Bonds:** A day to highlight the value of relationships and friendships.{"\n"}
          - **Appreciating Nature:** A moment to cherish and experience the beauty of nature.{"\n"}
          - **Sharing Joy:** A day to share joy and happiness with others.{"\n"}
          - **Balance in Life:** A festival that connects family and community.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Conclusion</Text>
        <Text style={styles.description}>
          The Kaanum Pongal festival concludes joyfully:{"\n\n"}
          1. **Inner Peace:** Trips amidst nature bring peace of mind.{"\n\n"}
          2. **Family Excitement:** Share love and joy with relatives and friends.{"\n\n"}
          3. **Fulfillment:** The satisfaction of celebrating traditions.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wishing you and your family a Kaanum Pongal filled with joy and tranquility!
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
    color: "#e65100",
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
