import { Dimensions, StyleSheet, View } from "react-native";
const {width, height} = Dimensions.get('window');
const Pill = () => {
    return ( 
        <View style={pill.containerpill}>
        </View>
     );
}
 
export default Pill;
const pill=StyleSheet.create({
    containerpill:{
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:'#5EB670',
        height:40,
        width:width/2,
        marginTop:10,
        alignSelf:"flex-end",
        elevation:2

    }
})