import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Newpongal1NavigationProp = NativeStackNavigationProp<
{
  Newpongal1: undefined;
  NewP11: undefined;
  NewP12: undefined;
  NewP13: undefined;
  NewP14: undefined;
  NewP15: undefined;
  NewP16: undefined;
  
 
}, 'Newpongal1'>;


export default function Newpongal1() {
  const navigation = useNavigation<Newpongal1NavigationProp>();
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
              <Button title="பொங்கல் சிறப்புகள்"  color="#4CAF50"
               onPress={() => navigation.navigate("NewP11")}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="போகி"  color="#FF6347"
              onPress={() => navigation.navigate("NewP12")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="தை பொங்கல்"  color="#87CEEB"
              onPress={() => navigation.navigate("NewP13")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="மாட்டுப் பொங்கல்" color="#FFD700"
              onPress={() => navigation.navigate("NewP14")}  />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity style={styles.button}>
              <Button title="காணும் பொங்கல்"  color="#E6E6FA" 
              onPress={() => navigation.navigate("NewP15")}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSpace}> 
            <TouchableOpacity style={styles.button}>
              <Button title="ஜல்லிக்கட்டு"  color="#F28D8D"
              onPress={() => navigation.navigate("NewP16")} />
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
