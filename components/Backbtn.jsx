import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Backbtn = ({onPress}) => {

  return (
      <TouchableOpacity onPress={onPress}>
          <Ionicons
              name='chevron-back-circle'
              size={24}
          />
          
          
    </TouchableOpacity>
  )
}

export default Backbtn