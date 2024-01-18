import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function CartTile({item, onPress, select}) {
    return (







            <TouchableOpacity className={!select ? 'flex-1 flex-row justify-between items-center p-4 mb-3  rounded-md shadow-xl bg-white shadow-slate-300'  : 'flex-1 flex-row justify-between items-center p-4 mb-3  rounded-md shadow-xl bg-[#e3eaf0] shadow-slate-300'}  onPress={onPress}>
    <View className=' w-[70px] justify-center items-center rounded-lg'>
                <Image
                source={{uri: item.cartItem.image}}
                className='w-[70px] h-[70px] rounded-lg'
                />
                   </View>
                <View className='flex-1 mx-3'>
                    <Text className='font-bold text-sm text-[#6CB2EB]' numberOfLines={1}>{ item.cartItem.title}</Text>
                    <Text className='font-bold text-xs text-gray-600 capitalize' numberOfLines={1}>{item.cartItem.owner}</Text>
                    <Text className='font-black text-xs text-gray-500' numberOfLines={1}>${ item.cartItem.price} * { item.quantity} </Text>
                    {/* <Text className='font-black text-xs text-gray-500' numberOfLines={1}>{ item.quantity}</Text> */}

            </View>
         
            
            <TouchableOpacity className='pb-3' onPress={() => {}}>
            <Ionicons
          
              name='trash'
              size={18}
              color={'red'}
            />

          
            </TouchableOpacity>
        </TouchableOpacity>

            )
}