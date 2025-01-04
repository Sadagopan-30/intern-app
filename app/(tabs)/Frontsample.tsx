import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth from "./services/firebaseAuth"; // Ensure the correct path for firebaseAuth
import { signOut } from "firebase/auth"; // Firebase signOut function

export default function Frontsample() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleLogout = async () => {
    try {
      // Attempt to sign out the user
      await signOut(auth);
      console.log("User logged out successfully");
      navigation.navigate("Loginscreensample");  // Navigate to the login screen after successful logout
    } catch (error: unknown) {
      // Handle the error, ensuring the error is of type Error
      if (error instanceof Error) {
        console.error("Logout error:", error.message);
      } else {
        console.error("Logout error: Unknown error occurred");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SG60 Sakthi Blaze</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDF22",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "FFDF22",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#FFDF22",
    fontSize: 18,
    fontWeight: "600",
  },
});
