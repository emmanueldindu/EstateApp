import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios'

const AddToCart = async(productId, quantity) => {

    try{

        const token = await AsyncStorage.getItem('token');
        const apiUrl = 'https://estateapi.onrender.com/api/cart';
        console.log(token);
        const data = {
            cartItem: productId,
            quantity: quantity
        }


        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer '+ JSON.parse(token)
        }

        await axios.post(apiUrl, data, {
            headers
        })
    } catch (error) {
        throw new Error(error.message);
    }
}


export default AddToCart