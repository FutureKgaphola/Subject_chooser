import {
  TextInput,
  View,
  StyleSheet,
  Text,Platform,
  TouchableOpacity,
} from "react-native";
import * as Progress from "react-native-progress";
import { Feather } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Registerbutton from "./Registerbutton";
import { Card } from "react-native-elements";
import { Link } from "@react-navigation/native";

const SharedForm = (props) => {
  const tryTonavigate=()=>{
    try {
      props.navigation.push('PerformancePage')
    } catch (error) {
      return (
        <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
          Go to Jane's profile
        </Link>
      );
    }
  }
  return (
    <Card elevation={7} containerStyle={{ borderRadius: 9, margin: 7 ,marginLeft:Platform.OS === 'web' ? 40 : 0,
    marginRight:Platform.OS === 'web' ? 40 : 0}}>
      <Registerbutton />
      <View style={styles.box}>
        <View style={styles.inputscontainer}>
          <Feather style={{ margin: 10 }} name="mail" size={25} color="black" />
          <TextInput
            style={styles.input}
            placeholder="user's email"
            placeholderTextColor={"gray"}
            cursorColor={"gray"}
            returnKeyType="next"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputscontainer}>
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
            returnKeyType="next"
            keyboardType="email-address"
          />
        </View>
      </View>
      <Text style={styles.forgotPass}>forgot password</Text>
      <Progress.Bar
        progress={0.1}
        color="#5EB670"
        borderColor="#5EB670"
        indeterminate={false}
        style={{ margin: 5, width: "100%" }}
      />

      <View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>tryTonavigate()}>
          <FontAwesome5 name="check-circle" size={24} color="#fff" />
          <Text style={{ color: "#fff", alignSelf: "center", padding: 3 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default SharedForm;
const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    fontSize: 20,
    width: "100%",
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
