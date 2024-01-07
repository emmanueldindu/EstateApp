import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Favourite() {

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

            // if (favorites[item._id]) {
            //     console.log(item._id);

            //     setFavorites(true);
            // }
            // setFavorites(true)
        }
    } catch (error) {
        console.log(error)
    }
}

  
    
const deleteFavorites = async () => {
  const id = await AsyncStorage.getItem('id');
  const favoritesId = `favorites${JSON.parse(id)}`
  let productId = id;
  

  try {
      const existingItem = await AsyncStorage.getItem(favoritesId)
      let favoritesObj = existingItem ? JSON.parse(existingItem) : {};

      if (favoritesObj[productId]) {
          delete favoritesObj[productId];

         checkFavorites()
        //  setFavorites(false)
      } 

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj))
  } catch (error) {
      console.log(error)
  }
 //  console.log(favoritesId)
 //  console.log(productId)




 //  console.log(productObj)
};
  return (
    <View>
      <Text>Favourite</Text>
    </View>
  )
}