import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Peng1NavigationProp = NativeStackNavigationProp<
{
  Peng1: undefined;
  EngP11: undefined;
  BoghiP12: undefined;
  P13: undefined;
  P14: undefined;
  P15: undefined;
  P16: undefined;
  
 
}, 'Peng1'>;


export default function Peng1() {
  const navigation = useNavigation<Peng1NavigationProp>();
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
              <Button title="Pongal Specials" onPress={() => navigation.navigate("EngP11")} color="#4CAF50" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Bhogi" onPress={() => navigation.navigate("P13")} color="#FF6347" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Thai Pongal" onPress={() => navigation.navigate("BoghiP12")} color="#87CEEB" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Maatu Pongal" onPress={() => navigation.navigate("P14")} color="#FFD700" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Kaanum pongal" onPress={() => navigation.navigate("P15")} color="#E6E6FA" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}> 
            <TouchableOpacity style={styles.button}>
              <Button title="Jallikattu" onPress={() => navigation.navigate("P16")} color="#F28D8D" />
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
