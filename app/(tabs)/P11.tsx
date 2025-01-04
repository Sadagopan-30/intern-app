import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const P1 = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>பொங்கலின் சிறப்பு அம்சங்கள்</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          பொங்கல் தமிழர்களின் முதன்மை அறுவடை திருவிழாவாகும். இது நன்றி கூறும், மகிழ்ச்சி பகிரும் மற்றும் பாரம்பரியத்தை கொண்டாடும் ஒரு நேரமாகும். பொங்கல் நான்கு நாட்கள் கொண்டாடப்படுவதால், ஒவ்வொரு நாளும் தனித்துவமான அம்சங்கள் கொண்டுள்ளது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>பொங்கலின் சிறப்பு உணவுகள்</Text>
        <Text style={styles.description}>
          - **சக்கரை பொங்கல்:** வெல்லம், அரிசி, மற்றும் காய்கறிகளால் தயாரிக்கப்படும் இனிப்பான உணவு.{"\n"}
          - **வேண் பொங்கல்:** பால் மற்றும் மஞ்சள் பொடியால் தயாரிக்கப்படும் சுவையான உணவு.{"\n"}
          - **வறுவல்:** உருளைக்கிழங்கு, வாழைக்காய் போன்றவற்றின் பரிமாணம்.{"\n"}
          - **கூழ் வகைகள்:** பாரம்பரிய சாதங்கள் மற்றும் பலகாரம்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>பாரம்பரிய விளையாட்டுகள்</Text>
        <Text style={styles.description}>
          பொங்கலின் போது தமிழகத்தில் பின்பற்றப்படும் விளையாட்டுகள்:{"\n\n"}
          - **உரியடி:** விளையாட்டு வீரர்கள் பாம்புத்தொண்டியை உடைத்து பரிசுகளை வெல்ல முயற்சிக்கின்றனர்.{"\n"}
          - **காளைபோட்டி:** காளைகளை கட்டுப்படுத்தும் சாகச விளையாட்டு.{"\n"}
          - **மாடு அலங்காரம்:** மாட்டுகளை வண்ணங்களால் அலங்கரித்து பாரம்பரிய ஆடைகளை அணிவிக்கின்றனர்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>அலங்காரம் மற்றும் வழக்கம்</Text>
        <Text style={styles.description}>
          - **வாசல் கோலம்:** மஞ்சள் நிறங்களையும் மலர்களையும் கொண்ட அழகிய கோலங்கள்.{"\n"}
          - **மங்கல அலங்காரம்:** மாட்டு கூடங்கள் மற்றும் வீடுகள் மாங்கனி இலைகளால் அலங்கரிக்கப்படுகின்றன.{"\n"}
          - **வெள்ளி மற்றும் செம்பு பாத்திரங்கள்:** பூஜைக்கும் உணவுக்கும் பாரம்பரிய பாத்திரங்கள் பயன்படுத்தப்படுகின்றன.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>குடும்ப சங்கமம்</Text>
        <Text style={styles.description}>
          - **உணவு பகிர்வு:** உறவினர்களுடன் சாப்பிடும் பொங்கல் உணவுகள்.{"\n"}
          - **பரிசு பரிமாற்றம்:** வீட்டில் புதுப்பொருட்களை பரிமாறும் பழக்கம்.{"\n"}
          - **விழா நிகழ்ச்சிகள்:** குடும்பத்துடன் கலைநிகழ்ச்சிகளை மற்றும் பொழுதுபோக்கு நிகழ்ச்சிகளை அனுபவிக்கவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>சிறப்பு சந்தைகள்</Text>
        <Text style={styles.description}>
          பொங்கலுக்கான சிறப்பு சந்தைகள்:{"\n\n"}
          - **கரும்பு சந்தை:** கரும்பு வாங்குவதற்கு சிறப்பு இடம்.{"\n"}
          - **பாரம்பரிய உடைகள்:** ஆண்கள் வேஷ்டி மற்றும் பெண்கள் புடவை.{"\n"}
          - **கைத்தறி பொருட்கள்:** பாரம்பரிய கைத்தறி மற்றும் வீட்டுப்பொருட்கள்.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          உங்கள் குடும்பத்திற்கும் உங்களுக்கு பொங்கல் திருநாளில் மகிழ்ச்சி மற்றும் செழிப்பு நிறைந்த வாழ்த்துகளை தெரிவித்துக்கொள்கிறோம்!
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

export default P1;
