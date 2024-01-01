import { View, Text, TouchableOpacity, Image,  } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const SearchTitle = ({ item }) => {
  
  return (
  <ScrollView>
    <View>
      <TouchableOpacity className="justify-between items-center flex-row rounded-xl w-[95%] mx-auto bg-white p-1 mb-2" >
        <View className="w-[70px] justify-center content-center rounded-md">
<Image source={{uri: item.image}} className="w-full rounded-lg h-[60px]" style={{resizeMode: 'cover'}} />
          </View>
          <View className="flex-1 mx-2">
            <Text
            className="font-bold text-md ">
{item.title}
            </Text>
            <Text className="font-thin text-xs text-gray-500">
{item.location}
            </Text>

          </View>


          <View className="flex-1 ">
          <Text className="text-blue-300 p-2 font-semibold text-sm">$ {item.price }<Text className="font-thin text-xs text-gray-500">/month</Text></Text>
            {/* <Text className="font-thin text-xs">{item.owner }</Text> */}
          </View>

    </TouchableOpacity>
      </View>
      </ScrollView>
  )
}

export default SearchTitle