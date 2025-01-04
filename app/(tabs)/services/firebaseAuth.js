// Import the functions you need from the SDKs
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Corrected import

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW0pdk6NaRamzAXMYS6SMd13RJLYLkY94",
  authDomain: "tamilculture--app-ecd6a.firebaseapp.com",
  projectId: "tamilculture--app-ecd6a",
  storageBucket: "tamilculture--app-ecd6a.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "114589156125",
  appId: "1:114589156125:web:7b579cd0365f0f5f94d7f4"
};

// Check if a Firebase app is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export the `auth` object for use in other files
export default auth;
