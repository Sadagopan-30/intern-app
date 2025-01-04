import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth"; // Firebase Auth
import auth from "./services/firebaseAuth"; // Ensure this path is correct

// Import your screen components
import Newfront from "./Newfront";
import Newlogin2 from "./Newlogin2";
import Newsignup from "./Newsignup";
import Newmain from "./Newmain";
import Newpongal1 from "./Newpongal1";
import Newpongal2 from "./Newpongal2";
import Newpongal3 from "./Newpongal3";
import Newpongal4 from "./Newpongal4";
import Newpongal5 from "./Newpongal5";
import Newpongal6 from "./Newpongal6";
import Newpongal7 from "./Newpongal7";
import NewP11 from "./NewP11";
import NewP12 from "./NewP12";
import NewP13 from "./NewP13";
import NewP14 from "./NewP14";
import NewP15 from "./NewP15";
import NewP16 from "./NewP16";
import Neweng2 from "./Neweng2";
import Enewpongal1 from "./Enewpongal1";
import Enewpongal2 from "./Enewpongal2";
import Enewpongal3 from "./Enewpongal3";
import Enewpongal4 from "./Enewpongal4";
import Enewpongal5 from "./Enewpongal5";
import Enewpongal6 from "./Enewpongal6";
import Enewpongal7 from "./Enewpongal7";
import EnewP11 from "./EnewP11";
import EnewP12 from "./EnewP12";
import EnewP13 from "./EnewP13";
import EnewP14 from "./EnewP14";
import EnewP15 from "./EnewP15";
import EnewP16 from "./EnewP16";
import Newwelcome from "./Newwelcome";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [user, setUser] = useState<any>(null); // State to store user info

  useEffect(() => {
    // Check if the user is authenticated when the app loads
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state based on authentication status
      setIsLoading(false); // Set loading to false once check is complete
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={50} />
      </View>
    ); // Show loading spinner until auth state is determined
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={user ? "Newwelcome" : "Newfront"}>
        <Stack.Screen name="Newfront" component={Newfront} />
        <Stack.Screen name="Newlogin2" component={Newlogin2} />
        <Stack.Screen name="Newsignup" component={Newsignup} />
        <Stack.Screen name="Newwelcome" component={Newwelcome} />
        <Stack.Screen name="Newmain" component={Newmain} />
        <Stack.Screen name="Newpongal1" component={Newpongal1} />
        <Stack.Screen name="Newpongal2" component={Newpongal2} />
        <Stack.Screen name="Newpongal3" component={Newpongal3} />
        <Stack.Screen name="Newpongal4" component={Newpongal4} />
        <Stack.Screen name="Newpongal5" component={Newpongal5} />
        <Stack.Screen name="Newpongal6" component={Newpongal6} />
        <Stack.Screen name="Newpongal7" component={Newpongal7} />
        <Stack.Screen name="NewP11" component={NewP11} />
        <Stack.Screen name="NewP12" component={NewP12} />
        <Stack.Screen name="NewP13" component={NewP13} />
        <Stack.Screen name="NewP14" component={NewP14} />
        <Stack.Screen name="NewP15" component={NewP15} />
        <Stack.Screen name="NewP16" component={NewP16} />
        <Stack.Screen name="Neweng2" component={Neweng2} />
        <Stack.Screen name="Enewpongal1" component={Enewpongal1} />
        <Stack.Screen name="Enewpongal2" component={Enewpongal2} />
        <Stack.Screen name="Enewpongal3" component={Enewpongal3} />
        <Stack.Screen name="Enewpongal4" component={Enewpongal4} />
        <Stack.Screen name="Enewpongal5" component={Enewpongal5} />
        <Stack.Screen name="Enewpongal6" component={Enewpongal6} />
        <Stack.Screen name="Enewpongal7" component={Enewpongal7} />
        <Stack.Screen name="EnewP11" component={EnewP11} />
        <Stack.Screen name="EnewP12" component={EnewP12} />
        <Stack.Screen name="EnewP13" component={EnewP13} />
        <Stack.Screen name="EnewP14" component={EnewP14} />
        <Stack.Screen name="EnewP15" component={EnewP15} />
        <Stack.Screen name="EnewP16" component={EnewP16} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
