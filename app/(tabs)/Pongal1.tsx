import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Pongal1NavigationProp = NativeStackNavigationProp<
{
  Pongal: undefined;
  P1: undefined;
  P12: undefined;
  P13: undefined;
  P14: undefined;
  P15: undefined;
  P16: undefined;
 
}, 'Pongal'>;


export default function Pongal1() {
  const navigation = useNavigation<Pongal1NavigationProp>();
  return (
    // ImageBackground component to set the background image using the direct image URL
    <ImageBackground 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOCX88403JkQj4n_4uCGuACIuhNDo3xPdHQ&s' }}  // Same image URL as the first code
      style={styles.container}
    >
      <View style={styles.remainingSpace}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpace}>
            <TouchableOpacity  style={styles.button}>
              <Button title="பொங்கல் சிறப்புகள்" onPress={() => navigation.navigate("P1")} color="#4CAF50" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="போகி" onPress={() => navigation.navigate("P12")} color="#FF6347" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="தை பொங்கல்" onPress={() => navigation.navigate("P13")} color="#87CEEB" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="மாட்டுப் பொங்கல்" onPress={() => navigation.navigate("P14")} color="#FFD700" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="காணும் பொங்கல்" onPress={() => navigation.navigate("P15")} color="#E6E6FA" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}> 
            <TouchableOpacity style={styles.button}>
              <Button title="ஜல்லிக்கட்டு" onPress={() => navigation.navigate("P16")} color="#F28D8D" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 90,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center', // Ensures content is centered vertically and horizontally
  },
  buttonContainer: {
    padding: 80, 
  },
  buttonSpace: {
    marginBottom: 40,
    width: 250,
    borderRadius: 1000,
  },
  button: {
    borderRadius: 500,
  },
  remainingSpace: {
    paddingHorizontal: 25,
  },
});
