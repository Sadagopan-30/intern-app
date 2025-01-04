import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Newpongal5() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>பொங்கல் வாழ்த்துக்கள் 🎉</Text>
      </View>

      {/* Wishes Section 1 */}
      <View style={styles.section}>
        <Text style={styles.title}>முதலாவது வாழ்த்து</Text>
        <Text style={styles.description}>
          இனிய பொங்கல் திருநாளின் வாழ்த்துகள்! உங்கள் வாழ்க்கை இனிதும் வளமையும் நிரம்பிப் பொங்கட்டும்!
        </Text>
      </View>

      {/* Wishes Section 2 */}
      <View style={styles.section}>
        <Text style={styles.title}>இரண்டாவது வாழ்த்து</Text>
        <Text style={styles.description}>
          தைப்பொங்கல் திங்களாய் வந்து, உங்களுக்கு நல்ல ஆரோக்கியத்தையும் சந்தோஷத்தையும் கொடுக்கட்டும்! வாழ்த்துகள்!
        </Text>
      </View>

      {/* Wishes Section 3 */}
      <View style={styles.section}>
        <Text style={styles.title}>மூன்றாவது வாழ்த்து</Text>
        <Text style={styles.description}>
          புது பொங்கல் புது நம்பிக்கையை உங்கள் குடும்பத்திற்கும் நண்பர்களுக்கும் வழங்கட்டும்! இனிய பொங்கல் வாழ்த்துகள்!
        </Text>
      </View>

      {/* Wishes Section 4 */}
      <View style={styles.section}>
        <Text style={styles.title}>நான்காவது வாழ்த்து</Text>
        <Text style={styles.description}>
          உங்கள் வாழ்வில் பொங்கல் விழா போல நலமும் இன்பமும் பொங்கிப் பெருகட்டும்! பொங்கல் வாழ்த்துகள்!
        </Text>
      </View>

      {/* Wishes Section 5 */}
      <View style={styles.section}>
        <Text style={styles.title}>ஐந்தாவது வாழ்த்து</Text>
        <Text style={styles.description}>
          பொங்கலோ பொங்கல்! உங்கள் வீட்டிலும் மனதிலும் ஆனந்தம் நிரம்பி வழியட்டும். இனிய பொங்கல் திருநாள் வாழ்த்துக்கள்!
        </Text>
      </View>

      {/* Wishes Section 6 */}
      <View style={styles.section}>
        <Text style={styles.title}>ஆறாவது வாழ்த்து</Text>
        <Text style={styles.description}>
          தெய்வ சுபமுகங்கள் உங்களைச் சுற்றி வழிகாட்ட வாழ்த்துகிறோம்! இனிய பொங்கல் தின வாழ்த்துகள்!
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          தைப்பொங்கல் திருநாளின் இனிய வாழ்த்துக்கள்! உங்கள் வாழ்வில் சுபீட்சமும் மகிழ்ச்சியும் நிரம்பி வழியட்டும்!
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


