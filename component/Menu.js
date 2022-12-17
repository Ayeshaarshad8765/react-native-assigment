import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={[styles.menuContainer,{
      marginVertical:20,
     
    }]}>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=> navigation.navigate('Home')}>
        <Text style={styles.textStyle}>Home</Text>
       
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=> navigation.navigate('Gallery')}>
      <Text style={styles.textStyle}>Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=> navigation.navigate('Form')}>
        <Text style={styles.textStyle}>Form</Text>
      </TouchableOpacity>

     
    </View>
  )
}
const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:20,
        borderWidth:2,
        borderColor:'grey',
        
    },
    textStyle:{
        textTransform:'uppercase',
        alignItems:'center',
       marginBottom:20,
       marginTop:20
    },

})
export default Menu


//<Image style={styles.iconStyed} source={{uri:"https://img.icons8.com/stickers/90/000000/training.png",}}/>
//<Image style={styles.iconStyed} source={{uri:"https://img.icons8.com/stickers/90/000000/conference.png",}}/>
//<Image style={styles.iconStyed} source={{uri:"https://img.icons8.com/stickers/100/000000/about.png",}}/>