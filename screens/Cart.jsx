import { View, Text, TouchableOpacity, ActivityIndicator,   } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons'
// import fetchCart from '../Hooks/fetchCart'
import axios from 'axios'





const Cart = ({ navigation}) => {

  const [data, setData] = useState([])
  const [loading, setLoader] = useState(false)
  const [error, setError] = useState(null);


  const fetchData = async () => {
    setLoader(true);

    
    try{
        
        const token = await AsyncStorage.getItem('token');
        const apiUrl = 'https://estateapi.onrender.com/api/cart/find'

        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer '+ JSON.parse(token) 
        };

        const response = await axios.get(apiUrl, { headers });
        console.log('cart data responses:', response.data)
       
        


            const cartData = response.data[0]; 
    const cartProducts = cartData.products || [];

    console.log('Products:', cartProducts);

    setData(cartProducts);

        setLoader(false);
    } catch (error) {
        console.log('error fetching cart data:', error)
        setError(error)
        setLoader(false)
    } finally {
        setLoader(false);
    }
}


useEffect(() => {
    fetchData()

}, [])

const refetch = () => {
    setLoader(true)
    fetchData()
}



 

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
      
      <FlatList 
    data={data}
    keyExtractor={(item) => item._id}
    renderItem={({ item }) => (
        <View>
            <Text>{item.cartItem.title}</Text>
            <Text>Quantity: {item.quantity}</Text>
        </View>
    )}
/>
 
      </SafeAreaView>

        
  )
}

export default Cart