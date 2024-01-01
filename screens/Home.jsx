import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Find from '../components/Home/Find'
import Carousel from '../components/Home/Carousel'
import Heading from '../components/Home/Heading'
import ProductRow from '../components/Products/ProductRow'

const Home = () => {
  return (
    <SafeAreaView>
      
      
      <View className=" mt-2 mx-4 mb-[120px]">
        <View className="items-center flex-row justify-between">
          <Ionicons name='location-outline' size={24} />
          <Text className="font-bold" >Lagos, Nigeria</Text>

          <View className=" items-end">
            <View className="absolute  bottom-4 w-5 h-5 rounded-3xl items-center bg-blue-300 justify-center z-[999]"  >
              <Text className="font-medium   text-xs my-auto relative text-white">
              8  

              </Text>
              
            </View>
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
    </SafeAreaView>
  )
}

export default Home
 