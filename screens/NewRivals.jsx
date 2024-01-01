import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import { ScrollView,  } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import ProductList from '../components/Products/ProductList'

const NewRivals = ({navigation}) => {
    // const navigation = useNavigation()
    return (
      
    <SafeAreaView className="flex-1">
            <View className="flex-1 ">
              <View className="w-[95%] mx-3 flex-row   justify-start items-center fixed bg-blue-300 rounded-2xl top-1 z-[999]">
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name='chevron-back-circle' size={30} />
                  </TouchableOpacity>
                  
                  <Text className="text-white font-bold text-md mx-3">Products</Text>
                    </View>

                    <ScrollView>

                    <View className="top-12">


          <ProductList />
                    </View>
              
          </ScrollView>
          </View>

    </SafeAreaView>
  )
}

export default NewRivals