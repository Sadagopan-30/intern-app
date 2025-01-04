import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type NewmainNavigationProp = NativeStackNavigationProp<
  {
    Newmain: undefined;
    Newpongal1: undefined;
    Newpongal2: undefined;
    Newpongal3: undefined;
    Newpongal4: undefined;
    Newpongal5: undefined;
    Newpongal6: undefined;
    Newpongal7: undefined;
    Neweng2: undefined;
   
  },
  'Newmain'>;

export default function Newmain() {
    const navigation = useNavigation<NewmainNavigationProp>();

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
              <Button title="பொங்கல் சிறப்புகள்" color="#4CAF50" 
              onPress={() => navigation.navigate("Newpongal1")}/>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="சூரிய பொங்கல்" color="#FF6347"
                onPress={() => navigation.navigate("Newpongal2")} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="மாட்டு பொங்கல்"  color="#87CEEB"
                 onPress={() => navigation.navigate("Newpongal3")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="உரியடி பொங்கல்" color="#FFD700"
                 onPress={() => navigation.navigate("Newpongal4")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="பொங்கல் வாழ்த்து மடல்"  color="darkblue"
                 onPress={() => navigation.navigate("Newpongal5")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="வழிபடும் முறை"  color="#F28D8D"
                onPress={() => navigation.navigate("Newpongal6")} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSpace}>
              <TouchableOpacity style={styles.button}>
                <Button title="பொங்கல் செய்முறை"  color="#8A2BE2"
                onPress={() => navigation.navigate("Newpongal7")}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Button at top right corner */}
        <View style={styles.topRightButtonContainer}>
          <Button 
            title="Eng" 
            color="#FF4500" 
            onPress={() => navigation.navigate("Neweng2")} 
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
