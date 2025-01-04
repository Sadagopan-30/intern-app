import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function NewP12(){
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>போகி திருவிழா வழிமுறை</Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          போகி திருவிழா பொங்கலின் முதல் நாளாகும். இந்த நாளில் பழையவற்றை அகற்றி புதிய வாழ்க்கையை வரவேற்கின்றனர். இது புத்துணர்ச்சி மற்றும் புதிய தொடக்கத்தை குறிக்கும் பாரம்பரிய தினமாகும். 
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>தயாரிப்பு</Text>
        <Text style={styles.description}>
          போகி திருவிழாவுக்கு முன் செய்யவேண்டியவை:{"\n\n"}
          1. **வீட்டு சுத்தம்:** வீட்டை முழுவதும் சுத்தம் செய்து பழைய மற்றும் தேவையற்ற பொருட்களை அகற்றவும்.{"\n\n"}
          2. **பழையவற்றை எரித்தல்:** புது நெருப்பு அமைத்து, பழைய பொருட்களை தீயில் போட்டு அழிக்கவும். இது பழைய கஷ்டங்களை விடுத்து புத்துணர்ச்சியை வரவேற்கிறது.{"\n\n"}
          3. **கோலம் போடுதல்:** வாசலில் சூரியனுக்குப் போற்றாக அழகான கோலங்கள் வரைந்து பூக்களால் அலங்கரிக்கவும்.{"\n\n"}
          4. **ஆடைகள் அணிதல்:** பரம்பரிய உடைகள் அணிந்து திருவிழாவை சிறப்பிக்கவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>பூஜை முறை</Text>
        <Text style={styles.description}>
          போகி திருநாளில் கடவுளை வழிபடும் முறை:{"\n\n"}
          1. **விளக்கேற்றுதல்:** கடவுளின் முன்னிலையில் விளக்கேற்றி பூஜையை தொடங்கவும்.{"\n\n"}
          2. **காய்கறி அர்ப்பணம்:** மண் அல்லது கல் அடுப்பில் சமைக்கப்பட்ட சைவ உணவை கடவுளுக்கு அர்ப்பணிக்கவும்.{"\n\n"}
          3. **பிரார்த்தனை:** குடும்பத்துடன் சேர்ந்து சூரியனை வணங்கவும், தமிழ்ப் பாடல்கள் அல்லது ஆதித்ய ஹ்ருதயம் போன்றதை பாடவும்.{"\n\n"}
          4. **பிரசாதம் பகிர்தல்:** தயாரிக்கப்பட்ட உணவை அனைவருடனும் பகிர்ந்து கொள்ளவும்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழாக்கழகங்கள்</Text>
        <Text style={styles.description}>
          போகி திருநாள் மகிழ்ச்சியான முறையில் கொண்டாடப்படுகிறது:{"\n\n"}
          - **புகையலை நிகழ்ச்சி:** மரம், வற்றல் போன்ற பொருட்களை எரித்து பழைய மன அழுத்தங்களை அகற்றும் நிகழ்வு.{"\n"}
          - **கலைநிகழ்ச்சிகள்:** **கும்மி** மற்றும் **பரிமேளம்** போன்ற பாரம்பரிய நடனங்கள் நடத்தப்படலாம்.{"\n"}
          - **குடும்ப சந்திப்பு:** குடும்பத்தினர் ஒருங்கே கூடி மகிழ்வதற்கான நாள்.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>போகவின் முக்கியத்துவம்</Text>
        <Text style={styles.description}>
          போகி திருவிழா ஆன்மீக மற்றும் சமூக ரீதியான முக்கியத்துவம் கொண்டது:{"\n\n"}
          - **பழையவற்றை அகற்றுதல்:** இது பழைய பழக்கவழக்கங்களை விடுதலை செய்யும் அடையாளமாக உள்ளது.{"\n"}
          - **புதிய தொடக்கம்:** புத்துணர்ச்சியை ஏற்படுத்தி புதியவை வரவேற்கிறது.{"\n"}
          - **ஏகமனப்பாங்கு:** குடும்பத்துடன் இணைந்து மகிழ்ச்சியை பகிர்வதற்கு உதவுகிறது.{"\n"}
          - **பாரம்பரிய மரபுகள்:** மரபு வழிப்பட்ட அழகிய முறைகளை பகிர்வதற்கான தருணமாக இருக்கிறது.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>விழா முடிவு</Text>
        <Text style={styles.description}>
          போகி திருநாளின் முடிவில்:{"\n\n"}
          1. **பிரசாதம் பகிர்வு:** போகி நாளில் தயாரிக்கப்பட்ட உணவை அனைவருடனும் பகிரவும்.{"\n\n"}
          2. **சமூக செயற்பாடுகள்:** சுற்றுச்சூழலை சுத்தமாக வைத்துக் கொள்ளவும்.{"\n\n"}
          3. **மாலை நேரம்:** மாலை விளக்கேற்றி, நாள் முழுவதும் கிடைத்த மகிழ்ச்சிக்கு கடவுளுக்கு நன்றி தெரிவிக்கவும்.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          உங்கள் குடும்பத்திற்கும் உங்களுக்கு மகிழ்ச்சி, நன்றி, செழிப்பு நிறைந்த போகி திருநாளை வாழ்த்துகிறோம்!
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


