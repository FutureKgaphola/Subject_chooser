import React from "react";
import { StyleSheet, View,ScrollView } from "react-native";
import Performance from "../shared/Performance";
import { SafeAreaView } from 'react-native-safe-area-context'
import Pill from '../shared/Pill';
import Imagepage from '../shared/Imagepage';

const PerformancePage = () => {
  if(Platform.OS==='ios' || Platform.OS==='android' )
  {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.childone}><Pill/>
      <Imagepage msg={"Just to get a few things from you, so we assist in making the right career path."}/></View>
      <View style={styles.childtwo}>
         
         <Performance/>
         
      </View>
      </ScrollView>
      
    </SafeAreaView>
    )
  }
};

export default PerformancePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F2EA",
    borderRadius: 30,
    flexDirection: "row",
    margin: 10,
    justifyContent:"center"
  },
  childone:{
    flex:1,
  },
  childtwo:{
    flex:1,
    alignItems:'stretch'
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
