import { Dimensions,Image, StyleSheet ,Text} from "react-native";
import { View } from "react-native";
const {width, height} = Dimensions.get('window');

const Imagepage = () => {
    return ( 
        <View style={styles.container}>
            <Image source={require("../assets/classroom.png")}
            style={{width: width-40, height: 300,alignSelf:"center",marginTop:10}}/>
            <Text style={{alignSelf:"center"}}>fgdfg</Text>
        </View>
     );
}
 
export default Imagepage;

const styles = StyleSheet.create({
    container:{

    }
})