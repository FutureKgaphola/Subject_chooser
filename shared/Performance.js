import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import googleIcon from "../assets/icons/google.png";
import personImg from "../assets/images/classroom.png";

const Performance = () => {
    return ( 
        <View>
      <View style={styles.menubar}>
        <Image source={googleIcon} style={{ height: 40 }} />
        <TouchableOpacity style={[styles.navItems, styles.Pill1]}>
          <Text style={styles.navText1}>My performance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItems, styles.Pill2]}>
          <Text style={styles.navText2}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {/* <Text>PerformancePage</Text> */}
        <View style={styles.subcontainer}>
          <View style={styles.card}>
            <Image
              source={personImg}
              style={{ height: 150, width: 150, borderRadius: 30 }}
            />
            <Text style={styles.subHeader}>Take a test</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>Go</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* card 2 */}
        <View style={styles.subcontainer}>
          <View style={styles.card}>
            <Image
              source={personImg}
              style={{ height: 150, width: 150, borderRadius: 30 }}
            />
            <Text style={styles.subHeader}>Upload marks</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>Go</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
     );
}
 
export default Performance;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E8F2EA",
      borderRadius: 30,
      flexDirection: "row",
      margin: 10,
      justifyContent:"center"
    },
    menubar: {
      flex: 1,
      flexDirection: "row",
      margin: 10,
    },
    subcontainer: {
      backgroundColor: "#5EB670",
      width: 150,
      height: 230,
      borderRadius: 20,
      paddingBottom: 20,
      margin: 25,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 20,
      height: 160,
      width: 152,
      right: 2,
    },
    button: {
      backgroundColor: "#FFFFFF",
      borderRadius: 25,
      width: 70,
      alignSelf: "center",
      marginTop: 10,
    },
    textBtn: {
      alignSelf: "center",
      fontSize: 18,
    },
    subHeader: {
      color: "#fff",
      alignSelf: "center",
      fontSize: 20,
      paddingTop: 15,
    },
    navItems: {
      marginLeft: 20,
      top: 8,
    },
    Pill1: {
      backgroundColor: "#5EB670",
      padding: 8,
      borderRadius: 20,
      top: -1,
    },
    Pill2: {
      backgroundColor: "#E8F2EA",
      padding: 8,
      borderRadius: 20,
      top: -1,
    },
    navText1: {
      fontSize: 20,
      color: "#fff",
     
    },
    navText2: {
      fontSize: 20,
      color: "#5EB670",
    },
  });
  