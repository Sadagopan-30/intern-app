import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function NewP13() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>தை பொங்கல் திருவிழா வழிமுறை</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          தை பொங்கல் தமிழர்களின் முக்கியமான கிருஷ்ணவிழா ஆகும். இது பொங்கல் திருவிழாவின் இரண்டாவது நாளாகும். விவசாயத்தை கொண்டாடும் இந்த திருவிழா, உதயம் மற்றும் நன்றியுடன் கூடிய காலத்தின் தொடக்கத்தை குறிக்கிறது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>தயாரிப்பு</Text>
        <Text style={styles.description}>
          தை பொங்கலுக்கான ஆயத்தம்:{"\n\n"}
          1. **வீட்டின் அலங்காரம்:** வீடுகளை சுத்தமாக செய்து அழகிய கோலங்கள் வரைந்து பொங்கலுக்காக தயார் செய்யவும்.{"\n\n"}
          2. **பொங்கல் சமைப்பதற்கான பொருட்கள்:** பால், அரிசி, பனை வெல்லம், கடலை பருப்பு, முந்திரி, மற்றும் ஏலக்காய் போன்றவை தயார் செய்யவும்.{"\n\n"}
          3. **பொங்கல் சமைக்கும் இடம்:** வீட்டின் முற்றத்தில் அழகிய வேஷ்டிகளால் அலங்கரித்து, மண் அடுப்பு அமைக்கவும்.{"\n\n"}
          4. **பொங்கல் பாத்திரம்:** பாரம்பரியமாக பொன் அல்லது மண் பாத்திரத்தை பயன்படுத்தி பொங்கல் சமைக்கவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>பொங்கல் சமைப்பு முறை</Text>
        <Text style={styles.description}>
          தை பொங்கல் திருநாளில் உணவு தயாரிப்பு மற்றும் வழிபாடு:{"\n\n"}
          1. **பால் கொதித்தல்:** பொங்கலின் முக்கிய நிகழ்ச்சியாக பால் கொதிக்க விடவும். பால் கொதிக்கும் போது "பொங்கலோ பொங்கல்!" எனக் கூறி மகிழ்ச்சியை வெளிப்படுத்தவும்.{"\n\n"}
          2. **பொங்கல் சமைத்தல்:** பால், அரிசி, பனை வெல்லம், மற்றும் பருப்பு சேர்த்து பொங்கலை சமைக்கவும்.{"\n\n"}
          3. **பூஜை:** பொங்கலை சூரியனுக்கு அர்ப்பணித்து நன்றி தெரிவிக்கவும். மரக்கொழுந்து மற்றும் பலப்பழங்கள் நெய் சேர்த்து வழிபாடு செய்யவும்.{"\n\n"}
          4. **பிரசாதம் பகிர்வு:** அனைவருடனும் சமைத்த பொங்கலை பகிர்ந்து கொள்ளவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழாக்கழகங்கள்</Text>
        <Text style={styles.description}>
          தை பொங்கலின் கொண்டாட்ட அம்சங்கள்:{"\n\n"}
          - **கோலப்போட்டி:** அழகான கோலங்கள் வரைந்து பல்வேறு போட்டிகளில் கலந்து கொள்ளலாம்.{"\n"}
          - **விவசாய பாரம்பரியம்:** உழவர் வாழ்வின் மகத்துவத்தை பாராட்டும் நிகழ்வுகள் நடத்தப்படுகின்றன.{"\n"}
          - **குடும்ப சந்திப்பு:** குடும்பத்தினர் ஒன்றாக சேர்ந்து மகிழ்ச்சியாக பொங்கல் சிறப்பிக்கின்றனர்.{"\n"}
          - **பகிர்ந்தளிப்பு:** அண்டை வாடிகள் மற்றும் பிற உறவினர்களுடன் உணவை பகிர்ந்து கொண்டாடவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>பொங்கலின் முக்கியத்துவம்</Text>
        <Text style={styles.description}>
          தை பொங்கல் திருவிழாவின் ஆன்மீக மற்றும் சமூக முக்கியத்துவம்:{"\n\n"}
          - **விவசாயிகளை பாராட்டுதல்:** உழவர்களின் உழைப்பை கௌரவிக்க தேவையான நாள்.{"\n"}
          - **நன்றி செலுத்தல்:** இயற்கைக்கும், சூரியனுக்கும் நன்றி தெரிவிக்கும் வழிபாட்டு நாள்.{"\n"}
          - **புதிய தொடக்கம்:** சுபசமாச்சாரம் மற்றும் செழிப்பு நிறைந்த புதிய தொடக்கத்தை குறிக்கிறது.{"\n"}
          - **தாய்மண்ணின் பாரம்பரியம்:** தமிழின் கலை மற்றும் பண்பாட்டு மரபுகளை உயிர்ப்பிக்கும் திருநாள்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழா முடிவு</Text>
        <Text style={styles.description}>
          தை பொங்கல் திருவிழா மகிழ்ச்சியான முறையில் முடிவடைகிறது:{"\n\n"}
          1. **பிரார்த்தனை:** நாள் முழுவதும் கிடைத்த மகிழ்ச்சிக்கு கடவுளுக்கு நன்றி தெரிவிக்கவும்.{"\n\n"}
          2. **சமூக உணவு:** உறவினர்களுடன் இணைந்து பொங்கல் உணவுகளை பகிர்ந்து கொள்ளவும்.{"\n\n"}
          3. **சுற்றுச்சூழல் கவனம்:** திருவிழா முடிவில் சுற்றுப்புறங்களை சுத்தமாக வைத்துக் கொள்ளவும்.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          உங்களின் பொங்கல் திருவிழா சந்தோஷம், நன்றி மற்றும் செழிப்புடன் செழிக்க வாழ்த்துகிறோம்!
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


