import { Text, View, TouchableOpacity} from 'react-native'
import React, { useState, useEffect, useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { ScrollView,  } from 'react-native-gesture-handler'
import Find from '../components/Home/Find'
import Carousel from '../components/Home/Carousel'
import Heading from '../components/Home/Heading'
import ProductRow from '../components/Products/ProductRow'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Modalize } from 'react-native-modalize';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false)

  useEffect(() => {
    checkExistingUser();
  }, [])

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `users${JSON.parse(id)}`;
 
    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      } 


    } catch (error) {
      console.log('error retrieving the data:', error)

    }
  }

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <SafeAreaView>
      
      
      <View className=" mt-2 mx-4 mb-[120px]">
        <View className="items-center flex-row justify-between">
          <Ionicons name='location-outline' size={24} />
          <Text className="font-bold" >{ userData ? userData.location : "Lagos Nigeria" }</Text>

          <View className=" items-end">
            {/* <View className="absolute  bottom-4 w-5 h-5 rounded-3xl items-center bg-blue-300 justify-center z-[999]"  >
              <Text className="font-medium   text-xs my-auto relative text-white">
                

              </Text>
              
            </View> */}
            <TouchableOpacity>

            <Ionicons name='cart-outline' size={24}/>
            </TouchableOpacity>

          </View>

        </View>

        <ScrollView>
          <Find />
          <Carousel />
          <Heading />
          <ProductRow />
       
        </ScrollView>

      </View>
      <Modalize ref={modalizeRef}  snapPoint={500}>
        {/* Modal content */}
        <View>
          <Text>Your Modal Content</Text>
        </View>
      </Modalize>

    </SafeAreaView>
  )
}

export default Home
 