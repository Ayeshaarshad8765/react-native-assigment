import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
//import Images1 from '../assets/travel.jpeg'
const Flatwork = () => {
    const names =[
        {
            index:1,
            name:'All',
        },
        {
            index:2,
            name:'Fight'
        },
        {
            index:3,
            name:'Cruise'
        },
        {
            index:4,
            name:'Train'
        },
        {
            index:4,
            name:'Advanture'
        },
        {
            index:4,
            name:'Resturant'
        },
    ]
  return (
    <View style={styles. viewOne}>
   <Text  style={styles.textStyleOne}>Where Would you Like To Travel</Text>

    <FlatList  style={styles.listStyle}
    keyExtractor={(index)=>{
        return index.index
    }}
    horizontal
    data={names} renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name}</Text>
    }}/>

<View >

<Image style={styles.image}
source={require('../assets/aus.jpg')}/>

<Image style={styles.image}
source={require('../assets/egy1.jpg')}/>


<Image style={styles.image}
source={require('../assets/isl.jpg')}/>
<Image style={styles.image}
source={require('../assets/itl.jpg')}/>


<Image style={styles.image}
source={require('../assets/london.jpg')}/>
<Image style={styles.image}
source={require('../assets/mon.jpg')}/>

<Image style={styles.image}
source={require('../assets/london2.jpg')}/>
<Image style={styles.image}
source={require('../assets/mon3.jpg')}/>

<Image style={styles.image}
source={require('../assets/paris.jpg')}/>
<Image style={styles.image}
source={require('../assets/mon2.jpg')}/>


</View>
</View>
  )
}
const styles = StyleSheet.create({
    viewOne:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        marginTop:'275px',
        //paddingBottom:'285px'
    },
    textStyleOne:{
        fontSize:40,
        fontWeight:'bold',
        color:'#eb6157',
       // marginTop:'290px'
    },
    textStyle:{
        fontSize:20,
        padding:5,
       backgroundColor:'#eb6157',
        margin:10,
        color:'white',
        borderRadius:10
    },
    listStyle:{
        textAlign:'center',
        margin:30,
        padding:10,
       marginTop:30,
      
    },
    image:{
        width:'80%',
        height:'60%',
        borderRadius:5,
        paddingTop:30,
        marginBottom:30,
        marginHorizontal:100,
        
      },
      
})
export default Flatwork

