import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductCardView = ({}) => {
    return (
      <TouchableOpacity onPress={() =>{}}>
            

    <View className="w-[140px] h-[200px] bg-blue-200 mr-22 ms-22">
      <Text>ProductCardView</Text>
            </View>
      </TouchableOpacity>
            
  )
}

export default ProductCardView