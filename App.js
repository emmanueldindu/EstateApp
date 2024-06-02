import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from "expo-splash-screen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback } from 'react';
import ButtonTab from './Navigation/ButtonTab';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
import NewRivals from './screens/NewRivals';
import Login from './screens/Login';
import Favourite from './screens/Favourite';
import Toast from 'react-native-toast-message';
import Rented from './screens/Rented';
import Register from './screens/Register';
import { LogBox } from 'react-native';
const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs();
export default function App() {


  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
  })



  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      
    }
  }, [fontsLoaded])




  if (!fontsLoaded) {
    return null
  }





  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={ButtonTab}
          options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown: false}}
        >

        </Stack.Screen>


        <Stack.Screen
          name='ProductList'
          component={NewRivals}
          options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen
          name='Favourite'
          component={Favourite}
          options={{headerShown: false}}
        >


        </Stack.Screen>
        
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        >


        </Stack.Screen>

        <Stack.Screen
          name='Rented'
          component={Rented}
          options={{headerShown: false}}
        >

          </Stack.Screen>

<Stack.Screen
          name='Register'
          component={Register}
          options={{headerShown: false}}
        >


        </Stack.Screen>
      </Stack.Navigator>
      <Toast  />

   </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'bold',
    fontSize: 14,
  }
})