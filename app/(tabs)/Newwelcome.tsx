import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import auth from "./services/firebaseAuth"; // Import Firebase auth service

// Define the navigation types for this screen
type NewwelcomeNavigationProp = NativeStackNavigationProp<{
  Newwelcome: undefined;
  Newmain: undefined;  // No params for Newfront (first page)
  Newfront: undefined;  // No params for Newlogin2 (login page)
}, 'Newwelcome'>;

export default function Newwelcome() {
  const navigation = useNavigation<NewwelcomeNavigationProp>();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Logout the user
      console.log("User logged out successfully");
      navigation.navigate("Newfront"); // Navigate to the first page (login)
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
      <TouchableOpacity onPress={() => navigation.navigate("Newmain")} style={styles.button}>
        <Text style={styles.buttonText}>Go to Main Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDF22", // Same background color as the first page
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#393e46", // Dark color for app name
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white", // White button for Main Page navigation
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFDF22", // Text color for buttons
    fontSize: 18,
    fontWeight: "600",
  },
});
