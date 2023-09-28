import { StyleSheet, Text } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { Platform,SafeAreaView } from 'react-native';
import { View } from 'react-native';

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});