import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const P14 = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>மாட்டுப் பொங்கல் திருவிழா வழிமுறை</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          மாட்டுப் பொங்கல் தமிழர்களின் பாரம்பரிய திருவிழாவின் மூன்றாம் நாளாகும். 
          இது உழவின் அங்கமாக இருக்கும் மாடுகளின் மகத்துவத்தை கௌரவிக்கும் நாள் ஆகும். 
          விவசாயம் மற்றும் பசுக்கள் மீதான நன்றியுணர்வை இவ்விழா பிரதிபலிக்கிறது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>தயாரிப்பு</Text>
        <Text style={styles.description}>
          மாட்டுப் பொங்கலுக்கான ஆயத்தம்:{"\n\n"}
          1. **மாடுகளின் அலங்காரம்:** மாடுகளை சுத்தமாகக் குளிக்க வைத்து, கொழுத்தும் நிறமான திரவியங்களால் அலங்கரிக்கவும்.{"\n\n"}
          2. **கொல்லிமலர்:** மாடுகளின் கொம்புகளுக்கு கொல்லிமலர் மாலை அணிவிக்கவும்.{"\n\n"}
          3. **அரிசி பொங்கல்:** மாடுகளுக்காக அரிசி பொங்கலை சமைத்து தயார் செய்யவும்.{"\n\n"}
          4. **வீட்டின் அலங்காரம்:** வீட்டின் முன் கோலங்களால் மற்றும் பண்டிகை சின்னங்களால் அழகுபடுத்தவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>மாட்டுப் பொங்கல் வழிபாட்டு முறை</Text>
        <Text style={styles.description}>
          மாட்டுப் பொங்கலின் வழிபாட்டு செயல்முறைகள்:{"\n\n"}
          1. **மாடுகளின் பூஜை:** மாடுகளின் மேல் மஞ்சள் நீர் தெளித்து, பூசணிக்காய் உடைத்து தீய சக்திகளை நீக்கவும்.{"\n\n"}
          2. **அரிசி பொங்கல் அர்ப்பணம்:** மாடுகளுக்கு அரிசி பொங்கல் கொடுத்து நன்றி தெரிவிக்கவும்.{"\n\n"}
          3. **மாடுகளை சஞ்சரிக்க விடுதல்:** மாடுகளை ஊர் முழுவதும் சஞ்சரிக்க விடுவது ஒரு பாரம்பரியமாகக் கருதப்படுகிறது.{"\n\n"}
          4. **பசுமாடுகளை பகிர்ந்து வணங்குதல்:** அனைவரும் ஒன்றிணைந்து பசுமாடுகளின் மீதான பாசத்தையும் நன்றியையும் வெளிப்படுத்தும் வழிபாடு.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழாக்கழகங்கள்</Text>
        <Text style={styles.description}>
          மாட்டுப் பொங்கலின் கொண்டாட்ட அம்சங்கள்:{"\n\n"}
          - **ஜல்லிக்கட்டு:** சில பகுதிகளில் மாடுகளை மதிப்பீடு செய்யும் ஜல்லிக்கட்டு போட்டிகள் நடத்தப்படுகின்றன.{"\n"}
          - **மாடுகள் திருவிழா:** மாடுகள் அலங்கரிக்கப்பட்டு ஊர் முழுவதும் அழைத்து செல்லப்படும் திருவிழா.{"\n"}
          - **சமூக உணவு:** குடும்பத்தினரும் சிநேகிதர்களும் சேர்ந்து உணவை பகிர்ந்து கொள்ளும் நிகழ்ச்சி.{"\n"}
          - **விவசாய பாரம்பரியம்:** மாடுகளை மரியாதை செய்யும் நிகழ்ச்சிகள் மூலம் விவசாயத்தை போற்றுதல்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>மாட்டுப் பொங்கலின் முக்கியத்துவம்</Text>
        <Text style={styles.description}>
          மாட்டுப் பொங்கலின் ஆன்மீக மற்றும் சமூக முக்கியத்துவம்:{"\n\n"}
          - **மாடுகளின் கௌரவம்:** விவசாயத்தில் முக்கிய பங்கு வகிக்கும் மாடுகளின் சிறப்பை முன்னிறுத்தும் நாள்.{"\n"}
          - **தொழிலாளர்களுக்கு நன்றி:** மாடுகள் உழவர்களின் பணி திறனை அதிகரிக்க உதவுவது இன்றைய பாராட்டுதலின் முக்கிய நோக்கம்.{"\n"}
          - **இயற்கையின் அருமை:** இயற்கையின் மடியில் வாழும் அனைத்து உயிரினங்களின் அவசியத்தையும் மரியாதையும் உணர்த்தும் திருநாள்.{"\n"}
          - **சமூக ஒன்றிப்பு:** உறவினர்கள் மற்றும் தோழமைகளுடன் இணைந்து மகிழ்ச்சியை பகிரும் திருவிழா.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழா முடிவு</Text>
        <Text style={styles.description}>
          மாட்டுப் பொங்கல் திருவிழா மகிழ்ச்சியாக முடிவடைகிறது:{"\n\n"}
          1. **பிரார்த்தனை:** மாடுகளின் பணி திறனுக்கும் நம்மை சார்ந்தவைகளுக்கும் நன்றி தெரிவிக்கவும்.{"\n\n"}
          2. **சமூக உணவு:** பகிர்ந்த உணவால் மகிழ்ச்சி மற்றும் சங்கமத்தை நிலைநிறுத்தவும்.{"\n\n"}
          3. **சுற்றுச்சூழல் கவனம்:** திருவிழா முடிவில் சுற்றுச்சூழல் சுத்தத்தையும் துரிதங்களையும் கவனத்தில் கொள்ளவும்.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          மாட்டுப் பொங்கல் திருநாள் உங்கள் வாழ்வில் மகிழ்ச்சி, நன்றி மற்றும் செழிப்பை கொண்டு வர வாழ்த்துகிறோம்!
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

export default P14;
