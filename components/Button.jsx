import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const Button = ({title, onPress, isValid, loader}) => {
  return (
      <TouchableOpacity onPress={onPress} className="h-[40px] w-full  my-5 bg-blue-300 justify-center items-center rounded-lg">
{
        loader === false ? (
          <Text className="font-black text-white text-md">{title}</Text>
          
        ): (
            <ActivityIndicator  color={'white'}/>
  )
}              
         
   </TouchableOpacity>
  )
}

export default Button