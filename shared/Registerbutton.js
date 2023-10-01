import { Image, Text, StyleSheet,View,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Registerbutton = (props) => {
  const {isregister,SetRegister,isForgotpassword,
  SetForgotpassword,
  isSubmition,SetSubmition}=props;

  const UpdateUI=()=>{
    if(isregister===true){
    SetRegister(false);
    SetForgotpassword(false);
    SetSubmition("Login");
    }else{
    SetRegister(true);
    SetForgotpassword(false);
    SetSubmition("Register");
    }
  }
  const backIcon=()=>{
    SetRegister(false);
    SetForgotpassword(false);
    SetSubmition("Login");
  }
    return ( 
        <View style={styles.column}>
          {!isForgotpassword ? <TouchableOpacity onPress={()=>UpdateUI()}>
          <Text style={{marginTop:10,fontSize:20,fontFamily:'InclusiveSans_Regular'}}>{isregister ? 'Back to login': 'Register'}</Text>
        </TouchableOpacity> : <TouchableOpacity onPress={()=>backIcon()} style={{marginBottom:5}}>
        <Ionicons name="arrow-back-circle-outline" size={26} color="black" /></TouchableOpacity>}
       
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