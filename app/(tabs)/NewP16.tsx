import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function NewP16(){
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ஜல்லிக்கட்டு திருவிழா வழிமுறை</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          ஜல்லிக்கட்டு தமிழர்களின் பாரம்பரியமான, வீரத்தையும் கலையையும் பிரதிபலிக்கும் 
          ஒரு முக்கிய விளையாட்டாகும். இது பொங்கல் திருவிழாவின் ஒரு அங்கமாக பசுக்கள் மற்றும் 
          விவசாயத்தின் முக்கியத்துவத்தை எடுத்துரைக்கிறது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>தயாரிப்பு</Text>
        <Text style={styles.description}>
          ஜல்லிக்கட்டிற்கு முன்னேற்பாடு:{"\n\n"}
          1. **காளைகளை தயார் செய்தல்:** பசுக்களின் ஆரோக்கியத்தைக் கவனித்து அவற்றை பராமரிக்கவும்.{"\n\n"}
          2. **விரைவுப்பாதை அமைப்பு:** ஜல்லிக்கட்டு நிகழும் இடத்தில் பாதுகாப்பான விரைவுப்பாதையை அமைக்கவும்.{"\n\n"}
          3. **பங்கு பெறுபவர்கள்:** திறமையான வீரர்களை பதிவு செய்து அவர்களுக்கு நன்றாக வழிகாட்டவும்.{"\n\n"}
          4. **பகிர்ந்த உணவு:** பாரம்பரிய உணவுகளை அனைவரும் பகிர்ந்து மகிழுங்கள்.{"\n\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>ஜல்லிக்கட்டு நிகழ்ச்சி</Text>
        <Text style={styles.description}>
          ஜல்லிக்கட்டு நாளின் முக்கிய நிகழ்வுகள்:{"\n\n"}
          1. **காளைகளை கொண்டு வருதல்:** பசுக்கள் திருவிழாவிற்காக ஊர்வலமாக கொண்டுவரப்படும்.{"\n\n"}
          2. **மற்ற நிகழ்ச்சிகள்:** பாரம்பரிய இசை மற்றும் நடன நிகழ்ச்சிகள் ஜல்லிக்கட்டிற்கு முன்பாக நடத்தப்படும்.{"\n\n"}
          3. **வீரர் வீரத்தைக் காட்டுதல்:** வீரர்கள் காளைகளை அடக்கி தங்களின் திறமையை வெளிப்படுத்துவர்.{"\n\n"}
          4. **விழா முடிவு:** பங்கேற்ற வீரர்களுக்கும் காளைகளுக்கும் பரிசுகள் வழங்கப்படும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>பாரம்பரியத்தின் முக்கியத்துவம்</Text>
        <Text style={styles.description}>
          ஜல்லிக்கட்டு திருவிழாவின் பல்வேறு அம்சங்கள்:{"\n\n"}
          - **பசுக்களின் முக்கியத்துவம்:** விவசாயத்திற்கும் தமிழர் வாழ்க்கைக்கும் பசுக்களின் முக்கியத்துவத்தை எடுத்துரைக்கிறது.{"\n"}
          - **வீரத்தை வெளிப்படுத்துதல்:** இளைய தலைமுறையினரின் துணிச்சலையும் வீரத்தையும் வரவேற்கும் நிகழ்வு.{"\n"}
          - **சமூக ஒற்றுமை:** அனைவரும் ஒன்று சேர்ந்து இந்த விழாவை கொண்டாடுவது.{"\n"}
          - **கலை மற்றும் பாரம்பரியம்:** தமிழர் கலாச்சாரத்தின் முக்கிய பகுதியான ஜல்லிக்கட்டு உலகளாவிய பிரசித்தியை பெற்றுள்ளது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழா முடிவு</Text>
        <Text style={styles.description}>
          ஜல்லிக்கட்டு திருவிழா மகிழ்ச்சியாக முடிவடைகிறது:{"\n\n"}
          1. **வீரர்களின் வெற்றி:** விழா சிறப்பாக முடிவடைந்து பங்கேற்றவர்களின் திறமையை கொண்டாடுதல்.{"\n\n"}
          2. **சமூக உறவுகள்:** இந்த நிகழ்வு மக்கள் ஒருவருடன் ஒருவர் இணைந்து மகிழ்ச்சியை பகிர்ந்து கொள்வது.{"\n\n"}
          3. **மனநிறைவு:** பாரம்பரியத்தை காப்பாற்றியதில் கிடைக்கும் மன நிறைவு.{"\n\n"}
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ஜல்லிக்கட்டு நிகழ்வில் பங்கேற்கும் அனைவருக்கும் நல்வாழ்த்துகள்! 
          இது உங்கள் வாழ்வில் மகிழ்ச்சியையும் சிறப்பையும் கொண்டு வரட்டும்!
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


