import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';
import Pill from '../shared/Pill';
import Imagepage from '../shared/Imagepage';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.childone}><Pill/>
      <Imagepage/></View>
      <View style={styles.childtwo}><Text>ffdf</Text></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center'
  },
  childone:{
    flex:1,
    backgroundColor:'red',
  },
  childtwo:{
    flex:1,
    backgroundColor:'green',
    alignItems:'stretch'
  },
  
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10
  }
})