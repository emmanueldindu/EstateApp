import { View, Text, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";


const Favourite = ({navigation}) => {

  const [favorites, setFavorites] = useState();
  const [favData, setFavData] = useState([]);
  useEffect(() => {
checkFavorites()
  }, [])  

  const checkFavorites = async () => {
    const id = await AsyncStorage.getItem('id');
    const favoritesId = `favorites${JSON.parse(id)}`

    console.log(favoritesId)

    try {
        const favoritesObj = await AsyncStorage.getItem(favoritesId);

        if (favoritesId !== null) {
          const favorites = JSON.parse(favoritesObj);
          const favList = Object.values(favorites)
          setFavData(favList)

          console.log(favList.length)


        }
    } catch (error) {
        console.log(error)
    }
}

  
    
const deleteFavorites = async (product) => {
  const id = await AsyncStorage.getItem('id');
  const favoritesId = `favorites${JSON.parse(id)}`
  let productId = product;
  

  try {
      const existingItem = await AsyncStorage.getItem(favoritesId)
      let favoritesObj = existingItem ? JSON.parse(existingItem) : {};

      if (favoritesObj[productId]) {
          delete favoritesObj[productId];

     navigation.goBack()
        //  setFavorites(false)
      } 

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj))
  } catch (error) {
      console.log(error)
  }

};
  return (
    <SafeAreaView className='mt-4 mx-3'>
      <View className="flex-row items-center w-full  justify-start mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name='chevron-back-circle'
            size={30}
          />
          </TouchableOpacity>
        <Text className='font-black text-xl tracking-[6px]'>
          Favorites
        </Text>
        

      </View>

      <FlatList 
        data={favData}
        renderItem={({ item }) => (<View  className="flex-1 flex-row justify-between items-center p-4 mb-3  rounded-md shadow-xl bg-white shadow-slate-300 ">
          <View className='w-[70px] justify-center items-center rounded-lg'>
            <Image source={{uri: item.imageUrl}} className='w-[70px] h-[70px] rounded-lg'/>
          </View>
          

          <View className='flex-1 mx-3 '>
            <Text className="font-black text-xs">{item.title}</Text>
            <Text className="font-black text-xs">{item.supplier}</Text>
            <Text className="font-black text-xs">{ item.price}</Text>
          </View>
        </View>)}
        keyExtractor={(item, index) => index.toString()}
      
      />
  </SafeAreaView>
  )
}

export default Favourite