import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList,  } from 'react-native-gesture-handler';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
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
        checkFavorites();
    
      } 

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj))
  } catch (error) {
      console.log(error)
  }

};
  return (
    <View className='relative'>
    <SafeAreaView className='mt-4 mx-3'>
      <View className="flex-row items-center w-full fixed justify-start mb-5">
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
            <Text className="font-bold text-sm text-[#6CB2EB]">{item.title}</Text>
            <Text className="font-bold text-xs text-gray-600">{item.supplier}</Text>
            <Text className="font-black text-xs text-gray-500">$ { item.price}</Text>
          </View>

            <Ionicons
            onPress={() => deleteFavorites(item.id)}  
              name='trash'
              size={18}
              color={'red'}
            />

          


        </View>)}
        keyExtractor={(item, index) => index.toString()}
      
      />
      </SafeAreaView>
      </View>
  )
}

export default Favourite