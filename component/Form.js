import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Checkbox from 'expo-checkbox';


const Form = () => {
    const [agree, setAgree]=useState(false);
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !adress) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Booking Form</Text>
      <Text style={styles.description}>I Hope enjoy wounderFul Holidays</Text>

      <View style={styles.listContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false}
            value={name} onChangeText={(actualData)=>setName(actualData)}
        />
    </View>

    <View style={styles.listContainer}>
        <Text style={styles.labels}> Enter your address </Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false}
            value={adress} onChangeText={(actualData)=>setAdress(actualData)}
        />
    </View>

    <View style={styles.listContainer}>
        <Text style={styles.labels}> Enter your number</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} 
             value={phone} onChangeText={(actualData)=>setPhone(actualData)}
        />
    </View>

    <View style={styles.listContainer}>
        <Text style={styles.labels}> Enter your password </Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} secureTextEntry={true}
             value={email} onChangeText={(actualData)=>setEmail(actualData)}
        />
    </View>

    <View style={styles.wrapper}>
    <Checkbox
       value={agree}
        onValueChange={()=>setAgree(!agree)}
        color={agree ? "#eb6157" : undefined}
    />
    <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
    </View>

    <TouchableOpacity
        style={[
           styles.buttonStyle1,
           {
            backgroundColor: agree ? "#eb6157" : "grey",
          },
         ]}
        disabled={!agree}
        onPress={submit}
        >
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    
        mainContainer: {
            height: "150%",
            paddingHorizontal: 30,
            paddingTop:30,
            backgroundColor: "white",
          },
          mainHeader: {
            fontSize: 30,
            color: "#344055",
            fontWeight: "500",
            paddingTop: 20,
            paddingBottom: 15,
            textTransform: "capitalize",
            
          },
          description: {
            fontSize: 20,
            color: "#7d7d7d",
            paddingBottom: 20,
            lineHeight: 25,
          },
          listContainer: {
            marginTop: 20,
          },
          labels: {
            fontWeight: "bold",
            // fontSize: 15,
            color: "#7d7d7d",
            paddingBottom: 5,
            lineHeight: 25,
          },
          inputStyle: {
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.3)",
            paddingHorizontal: 15,
            paddingVertical: 6,
            borderRadius: 2,
          },
          wrapper: {
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            fontFamily: "JosefinSans_300Light",
          },
          wrapperText: {
            marginLeft: 10,
            color: "#7d7d7d",
            fontFamily: "JosefinSans_300Light",
          },
          multiineStyle: {
            paddingVertical: 4,
          },
          buttonStyle1: {
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 18,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 30,
          },
          buttonText: {
            color: "#eee",
          },
})
export default Form

