import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./services/firebaseAuth"; // Ensure the path is correct

type LoginscreensampleNavigationProp = NativeStackNavigationProp<{
    Loginscreensample: undefined;
    Signupscreensample: undefined;   // No params for Main screen
    Frontsample: undefined;  // No params for Login screen
  }, 
  'Loginscreensample'>;


export default function Loginscreensample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Email and password cannot be empty.");
        return;
      }
      if (password.length < 8) {
        Alert.alert("Error", "Password must be at least 8 characters long.");
        return;
      }
      const userCredential = await signInWithEmailAndPassword (auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
      {/*Alert.alert("Success", "User registered successfully!");*/}
      navigation.navigate("Frontsample")
    } catch (error: any) {
      console.error("Registration error:", error.message);
      Alert.alert("Registration Failed", error.message);
    }
  };
  const navigation = useNavigation<LoginscreensampleNavigationProp>();
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

       <View>
            <Text>New User?</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("Signupscreensample")}>
              <Text style={{color: "blue"}}>Sign Up</Text>
            </TouchableOpacity>
            
       </View>
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