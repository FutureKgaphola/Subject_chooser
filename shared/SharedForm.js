import {
  TextInput,
  View,
  StyleSheet,
  Text, Platform,
  TouchableOpacity,
  BackHandler,
  Alert
} from "react-native";
import * as Progress from "react-native-progress";
import { Feather } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Registerbutton from "./Registerbutton";
import { Card } from "react-native-elements";
import { useEffect, useState } from "react";

const SharedForm = (props) => {
  const [isregister, SetRegister] = useState(false);
  const [isForgotpassword, SetForgotpassword] = useState(false);
  const [isSubmition, SetSubmition] = useState("Login");
  const tryTonavigate = () => {
    if(isSubmition === "Login"){
      try {
        (Platform.OS=='android' || Platform.OS=='ios') ? props.navigation.push('PerformancePage'):null
      } catch (error) {
        console.log(error);
      }
    }else{
      Alert.alert('Succesful','Account created succesfull',[
        {
          text: 'login',
          onPress: () =>(Platform.OS=='android' || Platform.OS=='ios') ? props.navigation.push('PerformancePage'):null,
          style: 'default',
        },
      ])
    }
  }
  useEffect(() => {
    //const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    //return () => backHandler.remove()
  }, []);
  const UpdateUI = () => {
    SetRegister(false);
    SetForgotpassword(isForgotpassword ? false : true);
    SetSubmition(!isForgotpassword ? "no button" : "Login");

  }
  return (
    <Card elevation={7} containerStyle={{
      borderRadius: 9, margin: 7, marginLeft: Platform.OS === 'web' ? 40 : 0,
      marginRight: Platform.OS === 'web' ? 40 : 0
    }}>
      <Registerbutton
        isregister={isregister}
        SetRegister={SetRegister}
        isForgotpassword={isForgotpassword}
        SetForgotpassword={SetForgotpassword}
        isSubmition={isSubmition} SetSubmition={SetSubmition} />
      <View style={styles.box}>
        <View style={styles.inputscontainer}>
          <Feather style={{ margin: 10 }} name="mail" size={25} color="black" />
          <TextInput
            style={styles.input}
            placeholder="user's email"
            placeholderTextColor={"gray"}
            cursorColor={"gray"}
            enterKeyHint="next"
            inputMode="email"
          />
        </View>

        {!isForgotpassword && <View style={styles.inputscontainer}>
          <FontAwesome
            style={{ margin: 10 }}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="user's passsword"
            cursorColor={"gray"}
            placeholderTextColor={"gray"}
            enterKeyHint="next"
            inputMode="text"
            secureTextEntry={true}
          />
        </View>}


        {isregister && <View style={styles.inputscontainer}>
          <Ionicons style={{ margin: 10 }} name="person-circle-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="user's name"
            cursorColor={"gray"}
            placeholderTextColor={"gray"}
            inputMode="text"
          />
        </View>}

      </View>
      {isSubmition === 'Login' ? <TouchableOpacity onPress={() => UpdateUI()}>
        <Text style={styles.forgotPass}>{isForgotpassword ? 'Back to login' : 'forgot password'}</Text>
      </TouchableOpacity> : null}

      {isForgotpassword && <TouchableOpacity onPress={() => Alert.alert('succesful', "Reset link has been sent to the email provided.")} style={{ backgroundColor: '#5EB670', borderRadius: 15, marginTop: 10 }}>
        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', padding: 5 }}>Reset</Text>
      </TouchableOpacity>}


      <Progress.Bar
        progress={0.1}
        color="#5EB670"
        borderColor="#5EB670"
        indeterminate={false}
        style={{ margin: 5, width: "100%" }}
      />

      {isSubmition === "Login" || isSubmition === "Register" ? <View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => tryTonavigate()}>
          <FontAwesome5 name="check-circle" size={24} color="#fff" />
          <Text style={{ color: "#fff", alignSelf: "center", padding: 3 }}>
            {isSubmition}
          </Text>
        </TouchableOpacity>
      </View> : null}
    </Card>
  );
};

export default SharedForm;
const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    fontSize: 20,
    width: "100%"
  },
  inputscontainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  forgotPass: {
    alignSelf: `flex-end`,
    margin: 5,
    fontSize: 20,
    fontFamily: "InclusiveSans_Regular",
  },
  loginBtn: {
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "#5EB670",
    alignSelf: `flex-end`,
    elevation: 5,
    boxshadowColor: "gray",
    boxshadowRadius: 5,
  },
  box: {
    backgroundColor: "#5EB670",
    padding: 7,
    borderRadius: 17,

  },
});
