import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import axios from 'axios';


const fetchCart = async() => {

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
           
            


                const cartData = response.data[0]; // Assuming the cart data is in the first element
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


// console.log('passed data', data); 
    return { data, loading, error, refetch }
}


export const useCartProducts = () => {
    const { data } = fetchCart()
    return data;
}

export default fetchCart