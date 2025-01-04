import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./services/firebaseAuth"; // Ensure the path is correct
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SignupscreensampleNavigationProp = NativeStackNavigationProp<{
    Signupscreensample: undefined; 
    Loginscreensample: undefined;  // No params for Main screen
    Frontsample: undefined;  // No params for Login screen
  }, 
  'Signupscreensample'>;

export default function Signupscreensample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Email and password cannot be empty.");
        return;
      }
      if (password.length < 8) {
        Alert.alert("Error", "Password must be at least 8 characters long.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
      navigation.navigate("Loginscreensample")
      Alert.alert("Success", "User registered successfully!");
    } catch (error: any) {
      console.error("Registration error:", error.message);
      Alert.alert("Registration Failed", error.message);
    }
  };
  const navigation = useNavigation<SignupscreensampleNavigationProp>();
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
      <TextInput style={styles.textInput} 
          placeholder="Name"/>
        <TextInput style={styles.textInput} 
          placeholder="Username"/>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#ffea54",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 250,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#f5f5f5",
    borderColor: "#bdbdbd",
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#393e46",
    width: 250,
    alignItems: "center",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#0056b3",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});