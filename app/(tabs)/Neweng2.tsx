import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Neweng2NavigationProp = NativeStackNavigationProp<
  {
    Neweng2: undefined;
    Enewpongal1: undefined;
    Enewpongal2: undefined;
    Enewpongal3: undefined;
    Enewpongal4: undefined;
    Enewpongal5: undefined;
    Enewpongal6: undefined;
    Enewpongal7: undefined;

    
   
    
  },
  'Neweng2'>;

export default function Neweng2() {
  const navigation = useNavigation<Neweng2NavigationProp>();

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
              <Button title="Pongal Sirapugal" color="#4CAF50"
               onPress={() => navigation.navigate("Enewpongal1")} />
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Sooriya pongal"  color="#FF6347"
                onPress={() => navigation.navigate("Enewpongal2")}  />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Maatu Pongal"  color="#87CEEB" 
                 onPress={() => navigation.navigate("Enewpongal3")} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Uriyadi Pongal"  color="#FFD700" 
                onPress={() => navigation.navigate("Enewpongal4")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Pongal Greetings"  color="darkblue" 
                onPress={() => navigation.navigate("Enewpongal5")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Worship Method" color="#F28D8D"
                onPress={() => navigation.navigate("Enewpongal6")} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="Pongal Preparation"  color="#8A2BE2"
                onPress={() => navigation.navigate("Enewpongal7")} />
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
