import { Image, Text, StyleSheet,View } from "react-native";

const Registerbutton = () => {
    return ( 
        <View style={styles.column}>
        <Image
        source={require("../assets/images/google.png")} 
        style={{width: 40, height: 40, alignSelf:'flex-start'}}/>
        <Text style={{marginTop:10}}>Register</Text>
        </View>
     );
}
 
export default Registerbutton;

const styles = StyleSheet.create({
    column:{
      display:'flex',
      flexDirection:'row',
    },
})