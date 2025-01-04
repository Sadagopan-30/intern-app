import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Eng2NavigationProp = NativeStackNavigationProp<
  {
    Eng2: undefined;
    Peng1: undefined;

    
    Pongal2: undefined;
    Pongal3: undefined;
    Pongal4: undefined;
    Pongal5: undefined;
    PongalWorshipGuideTamil: undefined;
    HowToMakePongalTamil: undefined;
    Newfile: undefined;

    
  },
  'Eng2'>;

export default function Eng2() {
  const navigation = useNavigation<Eng2NavigationProp>();

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/474x/b9/28/f8/b928f82803ff3d47cac8299b4b43ea0a.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Icons */}
        <View style={styles.iconContainer}>
          <FontAwesome name="home" size={35} color="black" style={styles.icon} />
          <FontAwesome name="comment" size={35} color="black" style={styles.icon} />
          <FontAwesome name="star-half-o" size={35} color="black" style={styles.icon} />
          <FontAwesome name="share" size={35} color="black" style={styles.icon} />
        </View>
        
        <View style={styles.remainingSpace}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonSpace}>
              <Button title="Pongal Sirapugal" color="#4CAF50" onPress={() => navigation.navigate("Peng1")} />
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Sooriya pongal" onPress={() => navigation.navigate("Pongal2")} color="#FF6347" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Maatu Pongal" onPress={() => navigation.navigate("Pongal3")} color="#87CEEB" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Uriyadi Pongal" onPress={() => navigation.navigate("Pongal4")} color="#FFD700" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Pongal Greetings" onPress={() => navigation.navigate("Pongal5")} color="darkblue" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Worship Method" onPress={() => navigation.navigate("PongalWorshipGuideTamil")} color="#F28D8D" />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Pongal Preparation" onPress={() => navigation.navigate("HowToMakePongalTamil")} color="#8A2BE2" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Button at top right corner */}
        {/* Button at top right corner */}
        <View style={styles.topRightButtonContainer}>
          <Button 
            title="Tam" 
            color="#FF4500" 
            onPress={() => navigation.navigate("Newfile")} 
          />
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },
  buttonContainer: {
    padding: 40,
  },
  buttonSpace: {
    marginBottom: 40,
    width: 250,
    borderRadius: 1000,
  },
  button: {
    borderRadius: 500,
  },
  icon: {
    marginHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingVertical: 15,
    marginBottom: 1,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginRight: 3,
    marginLeft: -100,
  },
  remainingSpace: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: 'transparent',
  },
  topRightButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
