import { View, Text, TouchableOpacity, ActivityIndicator,   } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import fetchCart from '../Hooks/fetchCart'
import { useCartProducts } from '../Hooks/fetchCart'
const Cart = ({ navigation}) => {


  const cartProducts = useCartProducts();
  // const {loading, error, refetch, data } = fetchCart();
  // console.log('Cart component data2:', data);
 
  // useEffect(() => {
  //   // Check if data is available and loading is false before logging
  //   if (!loading && data) {
  //     console.log('Cart component data:', data);
  //   }
  
  //   // Handle error if there is one
  //   if (error) {
  //     console.error('Error fetching cart data:', error);
  //   }
  // }, [data, loading, error]);

  useEffect(() => {
    if (cartProducts && cartProducts.length > 0) {
      console.log('Cart component products:', cartProducts);
    }
  }, [cartProducts])

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
      
      {/* {loading ? (
                <ActivityIndicator />
            ) : data && data[0] && data[0].products ? (
                <FlatList 
                    data={data[0].products}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.cartItem.title}</Text>
                            <Text>Quantity: {item.quantity}</Text>
                    
                        </View>
                    )}
                />
            ) : (
                <Text>No data available.</Text>
            )} */}
 
      </SafeAreaView>

        
  )
}

export default Cart