import { Dimensions,Image, StyleSheet ,Text} from "react-native";
import { View } from "react-native";
const {width, height} = Dimensions.get('window');

const Imagepage = ({msg}) => {
    return ( 
        <View style={styles.container}>
            <Image source={require("../assets/images/classremoved.png")}
            style={{width: width-40, height: 300,alignSelf:"center",marginTop:10,objectFit:"contain"}}/>
            <Text style={{alignSelf:"center"}}>{msg}</Text>
        </View>
     );
}
 
export default Imagepage;

const styles = StyleSheet.create({
    container:{

    }
})