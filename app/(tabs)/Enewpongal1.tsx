import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Enewpongal1NavigationProp = NativeStackNavigationProp<
{
  Enewpongal1: undefined;
  EnewP11: undefined;
  EnewP12: undefined;
  EnewP13: undefined;
  EnewP14: undefined;
  EnewP15: undefined;
  EnewP16: undefined;
  
 
}, 'Enewpongal1'>;


export default function Enewpongal1() {
  const navigation = useNavigation<Enewpongal1NavigationProp>();
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
              <Button title="Pongal Specials"  color="#4CAF50" 
              onPress={() => navigation.navigate("EnewP11")}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Bhogi"  color="#FF6347"
              onPress={() => navigation.navigate("EnewP12")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Thai Pongal"  color="#87CEEB"
              onPress={() => navigation.navigate("EnewP13")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Maatu Pongal"  color="#FFD700"
              onPress={() => navigation.navigate("EnewP14")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="Kaanum pongal" color="#E6E6FA"
              onPress={() => navigation.navigate("EnewP15")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}> 
            <TouchableOpacity style={styles.button}>
              <Button title="Jallikattu"  color="#F28D8D"
               onPress={() => navigation.navigate("EnewP16")} />
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
