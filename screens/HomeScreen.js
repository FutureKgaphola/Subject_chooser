import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';
import Pill from '../shared/Pill';
import Imagepage from '../shared/Imagepage';
import SharedForm from '../shared/SharedForm';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.childone}><Pill/>
      <Imagepage msg={"making the right choice"}/></View>
      <View style={styles.childtwo}>
         <SharedForm/>
      </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center'
  },
  column:{
    display:'flex',
    flexDirection:'row',
  },
  childone:{
    flex:1,
  },
  childtwo:{
    flex:1,
    alignItems:'stretch'
  },
  
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10
  }
})