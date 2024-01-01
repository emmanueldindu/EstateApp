import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Find = () => {

const navigation = useNavigation()
    return (
      <View>
    <View className='w-full mt-2 '>
          <Text className="text-3xl font-bold mt-2">
              Find Your Perfect</Text>
          <Text className="text-3xl font-bold mt-2 text-[#6CB2EB]">Place</Text>
          
            </View>

            <View className="  flex-row  justify-between content-center  bg-gray-200  rounded-xl px-3 my-6 h-12 w-full">
                <TouchableOpacity className="my-auto">
                    <Feather name='search' size={22} className="my-auto" />
                </TouchableOpacity>
                <View className="rounded-sm justify-start items-start">
                    <TextInput
                        className="w-full h-full px-2"
                        value=''
                        onPressIn={() => navigation.navigate("Search")}
                        placeholder='search your favourite location'

 
              
                    />


                </View>
                <View>
                    <TouchableOpacity className="w-6 h-full my-auto justify-center items-center">
                        <Ionicons name='filter' size={22} color={'#6CB2EB'} />
                    </TouchableOpacity>
                </View>


            </View>
            </View>
  )
}

export default Find

const styles = StyleSheet.create({})