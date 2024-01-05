import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import AddToCart from '../Hooks/AddtoCart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params
    const [count, setCount] = useState(1)
    const [isLoggedIn, setIsLoggedin] = useState(false)
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
checkUser()
    }, [])
    const checkUser = async () => {
        try {
            const id = await AsyncStorage.getItem('id');
            if (id !== null) {
                setIsLoggedin((prevIsLoggedIn) => {
                  console.log(prevIsLoggedIn); // Log the previous state
                  return true;
                });
                console.log('user logged in');
            } else {
                console.log('user not logged in')
            }
        } catch (error) {

        }
    }

    const handlePres = () => {
        if (isLoggedIn) {
            navigation.navigate('Login')
        }
    }

    return (
      <SafeAreaView>
    <ScrollView>
          <View className="flex-1">
              <View className=" p-4  flex-row justify-between items-center absolute t-12 w-full z-[999]">
                  <TouchableOpacity className="fixed" onPress={() => navigation.goBack()}>
                      <Ionicons name='chevron-back-circle' size={30} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={isLoggedIn === true ? () => {} : navigation.navigate('Login')}>
                      <Ionicons name='heart' color={'#6CB2EB'} size={30} />
                  </TouchableOpacity>
                  
                  
              </View>
              <Image
                  source={{ uri: item.image }}
                  className="bg-cover aspect-square"
              />

              <View className="mt-[-20px] bg-white rounded-t-3xl  w-full ">
                  <View>
                      <Text className="w-full font-bold text-lg t-20 pl-4 pt-3">
                         {item.title}
                    </Text>
              </View>
              <View className=" pl-4  flex-row justify-between items-center t-20 bg-white w-full ">
                  <View className='t-2 flex-row justify-start items-center'>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <Ionicons key={index} name='star' size={22} color='gold'  />  
                      ))}
                      <Text className="text-gray-500 text-xs">(4.9)</Text>
                  </View>
                  <View className="p-2">
                                <Text className="text-blue-300 p-2 font-bold text-xl">$ {item.price }<Text className="font-thin text-xs text-gray-500">/month</Text></Text>
                  </View>
              </View>
              <View className="pl-4 pt-4 ">  
                  <Text className=" font-bold text-lg  ">
                      overview
                  </Text>

                  <Text className=" font-light pt-3 text-gray-500 tracking-wider text-xs">
{item.description}                  </Text>
              </View>

              <View className="pl-4 pt-4 flex flex-row items-center gap-x-6 justify-start">
                  <View className="flex flex-row ">
                      <Ionicons name='bed-outline' size={18} color='#6CB2EB'  />
                      <Text className="font-bold text-sm text-gray-700"> {item.room} beds</Text>

                  </View  >
                  <View className="flex flex-row">
                  <MaterialIcons color={'#6CB2EB'} name="bathtub" outline size={18} />

                      <Text className="text-sm text-gray-600 font-bold">{item.toilet} bathroom</Text>
                  </View>
                  <View className="flex-row">
                      <Ionicons name='contract-outline' size={18}  color={'#6CB2EB'}  />
                      <Text className="text-sm text-gray-600 font-bold"> {item.sqft} sqft   </Text>
                  </View>
              </View>

              <View className="pl-3 mt-4 pt-5  flex-row gap-x-2">
                  <Ionicons name='location' color={'#6CB2EB'} size={24} />
                            <Text className="text-xs text-gray-400">{item.location }</Text>
                  
                  
              </View>

              <View className="pl-4 mt-4  h-[250px] w-[95%] ">
                    <MapView
        style={{ height: 200, marginTop: 10 }}
        initialRegion={{
          latitude: 37.78825, // Replace with your latitude
          longitude: -122.4324, // Replace with your longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 58.78825, longitude: -122.4324 }} // Replace with your marker coordinates
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
                  
              </View>
              </View>
              
          </View>

                <View className="flex pl-4 pr-4  pb-2 flex-row justify-between bg-white">
                    <TouchableOpacity
                    onPress={isLoggedIn === true ? () => {} : navigation.navigate('Login')}
                        >
                    <View className="bg-black h-[40px] items-center w-[220px] rounded-2xl ">
                        <Text className="text-[#fff] font-bold text-md p-2"> Book Now</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={isLoggedIn === true ? () => AddToCart(item._id, count) : navigation.navigate('Login')} className="w-[40px] justify-center items-center   h-[40px] bg-black rounded-full">
                        <Ionicons name='cart-outline' color={'white'} size={22} />
                    </TouchableOpacity>
                    

            </View>
          </ScrollView>
          </SafeAreaView>

    
  )
}

export default ProductDetails