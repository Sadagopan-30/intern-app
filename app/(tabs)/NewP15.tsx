import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function NewP15(){
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>காணும் பொங்கல் திருவிழா வழிமுறை</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          காணும் பொங்கல் திருவிழா தமிழர்களின் பொங்கல் பண்டிகையின் நான்காம் நாளாகும். 
          இது உறவினர்கள் மற்றும் நண்பர்களுடன் நேரம் செலவிட்டு, இயற்கையின் அழகை கண்டு மகிழும் நாளாகக் கருதப்படுகிறது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>தயாரிப்பு</Text>
        <Text style={styles.description}>
          காணும் பொங்கலுக்கான தயாரிப்புகள்:{"\n\n"}
          1. **உறவினர் சந்திப்பு:** உறவினர்கள் மற்றும் நண்பர்களுடன் கலந்துரையாட ஏற்பாடுகள் செய்யவும்.{"\n\n"}
          2. **புறசுற்றுலா:** பசுமை நிறைந்த இடங்களுக்கு அல்லது புனித தலங்களுக்கு செல்ல திட்டமிடவும்.{"\n\n"}
          3. **பகிர்ந்த உணவு:** வீட்டு உழைப்பு உணவுகளை தயார் செய்து மற்றவர்களுடன் பகிரவும்.{"\n\n"}
          4. **கலை நிகழ்ச்சிகள்:** பாரம்பரிய கலைகளை பகிரும் நிகழ்ச்சிகளை ஏற்பாடு செய்யவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>காணும் பொங்கல் கொண்டாட்டம்</Text>
        <Text style={styles.description}>
          காணும் பொங்கல் நாளின் முக்கிய நிகழ்ச்சிகள்:{"\n\n"}
          1. **உறவினர் கூட்டங்கள்:** குடும்ப உறுப்பினர்கள் மற்றும் நண்பர்களுடன் திரட்டமாகச் சேர்ந்து மகிழ்வது வழக்கம்.{"\n\n"}
          2. **பாரம்பரிய விளையாட்டுகள்:** செங்கல், கபடி போன்ற பாரம்பரிய விளையாட்டுகள் ஆடப்படும்.{"\n\n"}
          3. **பசுமை நாடுகளுக்குச் செல்லுதல்:** இயற்கையின் சுகங்களை அனுபவிக்க பசுமையான பகுதிகளுக்கு பயணம்.{"\n\n"}
          4. **தரிசனம்:** கோயில்களுக்கு சென்று அன்னப்பா தரிசனம் செய்வது முக்கியம்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழாக்கலவைகள்</Text>
        <Text style={styles.description}>
          காணும் பொங்கலின் பல்வேறு அம்சங்கள்:{"\n\n"}
          - **அகந்தை நீக்கம்:** குடும்ப உறவுகளை வலுப்படுத்தும் நன்னாள்.{"\n"}
          - **சமூகவியல் பரப்பு:** அறிமுகங்களை வலுப்படுத்தும் தினம்.{"\n"}
          - **பாரம்பரிய இசை:** நாட்டுப்புற இசை நிகழ்ச்சிகள்.{"\n"}
          - **சமூக உணவு:** பகிர்ந்த உணவால் மகிழ்ச்சி பகிரும் நிகழ்வுகள்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>காணும் பொங்கலின் முக்கியத்துவம்</Text>
        <Text style={styles.description}>
          காணும் பொங்கல் நாளின் சமூக மற்றும் ஆன்மீக முக்கியத்துவம்:{"\n\n"}
          - **நெருங்கிய உறவுகள்:** உறவுகள் மற்றும் நட்பின் முக்கியத்துவத்தை அடையாளப்படுத்தும் நாள்.{"\n"}
          - **இயற்கையைப் போற்றுதல்:** இயற்கையின் அருமையை உணர்ந்து அனுபவிக்கும் தருணம்.{"\n"}
          - **மகிழ்ச்சியுடன் பகிர்தல்:** மற்றவர்களுடன் மகிழ்ச்சியை பகிர்ந்து கொண்டாடும் நாள்.{"\n"}
          - **வாழ்வின் சமநிலையுணர்வு:** குடும்பத்தையும் சுற்றத்தையும் இணைக்கும் விழா.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழா முடிவு</Text>
        <Text style={styles.description}>
          காணும் பொங்கல் திருவிழா மகிழ்ச்சியாக முடிவடைகிறது:{"\n\n"}
          1. **அமைதியான மனநிலை:** இயற்கையின் மடியில் பயணங்கள் மன அமைதியை வழங்கும்.{"\n\n"}
          2. **உறவினர்களின் உற்சாகம்:** அன்பையும் மகிழ்ச்சியையும் உறவினர்கள் மற்றும் நண்பர்களுடன் பகிர்ந்து கொள்ளவும்.{"\n\n"}
          3. **மனநிறைவு:** தங்களின் பாரம்பரியத்தை அனுசரித்து கொண்டாடியதில் கிடைக்கும் மனநிறைவு.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          காணும் பொங்கல் நாள் உங்கள் குடும்பத்திற்கும் நண்பர்களுக்கும் மகிழ்ச்சியையும் 
          அமைதியையும் கொண்டுவர வாழ்த்துகிறோம்!
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


