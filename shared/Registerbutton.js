import { Image, Text, StyleSheet,View } from "react-native";

const Registerbutton = () => {
    return ( 
        <View style={styles.column}>
        <Image
        source={require("../assets/images/google.png")} 
        style={{width: 30, height: 30, alignSelf:'flex-start',marginTop:10}}/>
        <Text style={{marginTop:10,fontSize:20,fontFamily:'InclusiveSans_Regular'}}>Register</Text>
        </View>
     );
}
 
export default Registerbutton;

const styles = StyleSheet.create({
    column:{
      display:'flex',
      flexDirection:'row',
      alignItems:"center"
    },
})