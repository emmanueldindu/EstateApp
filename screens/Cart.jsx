import { View, Text, TouchableOpacity, ActivityIndicator,   } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import fetchCart from '../Hooks/fetchCart'
const Cart = ({ navigation}) => {

  const { data, loading, error, refetch } = fetchCart();
  useEffect(() => {
    console.log('Cart component data:', data);
  }, [data])


console.log('Rendering flat list...');
  return (

    <SafeAreaView className='mt-4 mx-3'>
      <View className="flex-row items-center w-full fixed justify-start mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name='chevron-back-circle'
            size={30}
          />
          </TouchableOpacity>
        <Text className='font-black text-xl tracking-[6px]'>
          Cart
        </Text>
        

      </View>
      
      {loading ? (
                <ActivityIndicator />
            ) : data && data[0] && data[0].products ? (
                <FlatList 
                    data={data[0].products}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.cartItem.title}</Text>
                            <Text>Quantity: {item.quantity}</Text>
                            {/* Add more details if needed */}
                        </View>
                    )}
                />
            ) : (
                <Text>No data available.</Text>
            )}
 
      </SafeAreaView>

        
  )
}

export default Cart