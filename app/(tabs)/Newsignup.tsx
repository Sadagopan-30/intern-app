import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./services/firebaseAuth"; // Ensure the path is correct
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NewsignupNavigationProp = NativeStackNavigationProp<{
  Newsignup: undefined;
  
  Newlogin2: undefined;
}, "Newsignup">;

export default function Newsignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const navigation = useNavigation<NewsignupNavigationProp>();

  const handleSignUp = async () => {
    try {
      if (!email || !password || !name || !username) {
        Alert.alert("Error", "All fields are required.");
        return;
      }
      if (password.length < 8) {
        Alert.alert("Error", "Password must be at least 8 characters long.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
      Alert.alert("Success", "Sign Up Successful!");
      navigation.navigate("Newlogin2");
    } catch (error: any) {
      console.error("Sign Up error:", error.message);
      Alert.alert("Sign Up Failed", error.message);
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
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
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
