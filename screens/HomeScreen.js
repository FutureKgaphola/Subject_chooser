import { View, StyleSheet, Dimensions, ScrollView ,Platform, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';
import Pill from '../shared/Pill';
import Imagepage from '../shared/Imagepage';
import SharedForm from '../shared/SharedForm';


const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  if(Platform.OS==='ios' || Platform.OS==='android'){
    var navigation = useNavigation();

      const handleReset = async ()=>{
        await removeItem('onboarded');
        navigation.push('Onboarding');
      }
  }

  if(Platform.OS==='ios' || Platform.OS==='android' )
  {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.childone}><Pill/>
      <Imagepage msg={"making the right choice"}/></View>
      <View style={styles.childtwo}>
         {/* <PerformancePage/> */}
         <SharedForm navigation={navigation}/>
      </View>
      </ScrollView>
      
    </SafeAreaView>
    )
  }else{
    return (
  <View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
      
      <View style={styles.childtwo}>
        {/* <PerformancePage/> */}
        <SharedForm/>
      </View>
      </View>
    )
  }
  
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