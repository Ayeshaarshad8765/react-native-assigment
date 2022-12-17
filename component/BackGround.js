import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React from 'react'
//const image = { uri: "https://reactjs.org/logo-og.png" };
import Menu from './Menu'
const BackGround = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/travel.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Travel with comfort and safety!</Text>
     
   
    </ImageBackground>

   <View>
    <Menu/>
   </View>
  </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
    width:'100%',
    height:'100%',
      flex: 1,
      justifyContent: "center"
    },
    text: {
        paddingTop:200,
        paddingBottom:100,
      color: "white",
      fontSize: 40,
      lineHeight: 40,
      fontWeight: "bold",
      textAlign: "center",
      //backgroundColor: "#000000c0"
    },
   
  });
  
export default BackGround

