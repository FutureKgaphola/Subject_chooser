import { StyleSheet} from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { Platform } from 'react-native';
import * as Font from "expo-font";
import { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    CroissantOne: require("./assets/fonts/Croissant_One/CroissantOne-Regular.ttf"),
    InclusiveSans_Italic: require("./assets/fonts/Inclusive_Sans/InclusiveSans-Italic.ttf"),
    InclusiveSans_Regular: require("./assets/fonts/Inclusive_Sans/InclusiveSans-Regular.ttf"),
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null; //equivalent to returning the splashscreen
  }
  return (
    <>
    {Platform.OS==='ios' || Platform.OS==='android' ? <AppNavigation />: <HomeScreen/>}
    </>
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