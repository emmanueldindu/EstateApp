import {
    View,
    Text,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
  
  } from "react-native";
  import React, {useState, useEffect} from "react";
  import ProductCardView from "./ProductCardView";
  import { Ionicons } from "@expo/vector-icons";
  import useFetch from "../../Hooks/useFetch";
  import { useNavigation } from "@react-navigation/native";
  import axios from 'axios'

const ProductList = () => {
    const [data, setData] = useState([])
    const [loading, setIsLoading] = useState(true)
  
    useEffect(() => {
      axios.get('https://estateapi.onrender.com/api/products/')
        .then((response) => {
          setData(response.data);
          setIsLoading(false)
        }).catch((error) => {
          console.log(error)
          setIsLoading(false);
        })
      
    }, []);
  
  
    const navigation = useNavigation()
  
  
    return (
      <SafeAreaView>
    
          <View className=" items-center  flex-wrap  justify-between p-1  flex-1 flex-row w-[100%] ">
           
          
                {loading ? (
                    // <View className="my-auto">
        <ActivityIndicator size={23} color='gray' className="my-auto mx-auto top-20" /> 
        ) : (
          data.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetails', {  item })}
              key={index}
              className="rounded-2xl h-[220px] mx-auto w-[45%]"
            >
              <Image
                source={{ uri: item.image }}
                className="h-[120px] mt-3 w-[90%] rounded-xl mx-auto"
              />
              <Text className="font-black p-1">{item.title}</Text>
              <Text className="font-xs text-xs p-1 text-gray-500">{item.location}</Text>
              <View className="w-full flex flex-1 flex-row justify-between">
                <Text className="text-blue-300 font-bold text-md">
                  $ {item.price}
                  <Text className="font-thin text-xs text-gray-500">/month</Text>
                </Text>
                <Ionicons name="heart-outline" size={20} color={'#6CB2EB'} />
              </View>
            </TouchableOpacity>
          ))
        )}
          </View>
       
        </SafeAreaView>
    );
  };

export default ProductList