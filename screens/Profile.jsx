import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

  useEffect(() => {
    checkExistingUser();
  }, [])

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `users${JSON.parse(id)}`;
 
    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      } else {
        navigation.navigate('Login')
      }


    } catch (error) {
      console.log('error retrieving the data:', error)

    }

  }


  const userLogout = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([useId, 'id']);
navigation.replace('Bottom Navigation')
    } catch {
console.log('error Logging out user', error)
    }
  }


  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout",
      [
        {
          text: "Cancel", onPress: () => console.log("cancel pressed")
        },

        {
          text: "Continue", onPress: () => userLogout()
        },
        // {defaultIndex : 1}
      ]
    )
  }



  
  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to Delete Account",
      [
        {
          text: "Cancel", onPress: () => console.log("cancel pressed")
        },

        {
          text: "Continue", onPress: () => console.log("Delete pressed")
        },
        {defaultIndex : 1}
      ]
    )
  }
  return (
    <SafeAreaView className="flex-1 w-full">
      <View className="flex-1 w-full"  >
        <StatusBar backgroundColor='#ccc' />
        <View className="w-full">
          <Image
            source={require('../assets/mo.jpg')}
            className="bg-cover object-cover w-full mx-auto h-[200px]"
            // style={{resizeMode: 'cover'}}
          />

        </View>

        <View className="flex-1 items-center">
          <Image
          source={require('../assets/ma.png')}
          className="h-[150px] w-[150px] rounded-full border-2 bg-cover mt-[-90px]"
          />
          <Text
            className="font-semibold my-2"

          > {userLogin === true ? "odoi" : "Please login into your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View className='p-2 bg-blue-200 rounded-lg'>
                <Text className="font-bold
                ">L O G I N</Text>

              </View>
            </TouchableOpacity>
          ) : (
              <View className="p-2 bg-blue-200 rounded-lg">
                <Text className="font-bold"> odoi@gmail.com </Text>

                
                
        </View>
          )}
        
          {userLogin === false ? (
            <View></View>
          ) : (
              <View className="w-[90%] mt-4 rounded-sm">
                <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
                  <View className="flex-row py-3 px-3 border-gray-300 border-b-2">
                    <MaterialCommunityIcons
                      name='heart-outline'
                      color='#333'
                      size={22}
                    />

                    <Text className=" ml-5 font-semibold text-sm leading-6">Favorites</Text>
                  </View>
                  
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Rented')}>
                  <View className="flex-row py-3 px-3 border-gray-300 border-b-2">
                    <MaterialCommunityIcons
                      name='home-outline'
                      color='#333'
                      size={22}
                    />

                    <Text className=" ml-5 font-semibold text-sm leading-6">My Rented Apartments</Text>
                  </View>

                  
                </TouchableOpacity>

                
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                  <View className="flex-row py-3 px-3 border-gray-300 border-b-2">
                    <MaterialCommunityIcons
                      name='cart-outline'
                      color='#333'
                      size={22}
                    />

                    <Text className=" ml-5 font-bold text-sm leading-6">Cart</Text>
                  </View>
                  
                </TouchableOpacity>



                
                <TouchableOpacity onPress={() => deleteAccount()}>
                  <View className="flex-row py-3 px-3 border-gray-300 border-b-2">
                    <AntDesign
                      name='deleteuser'
                      color='#333'
                      size={22}
                    />

                    <Text className=" ml-5 font-bold text-sm leading-6">Delete Account</Text>
                  </View>
                  
                </TouchableOpacity>
                

                <TouchableOpacity onPress={() => logout()}>
                  <View className="flex-row py-3 px-3 border-gray-300 border-b-2">
                    <AntDesign
                      name='logout'
                      color='#333'
                      size={22}
                    />

                    <Text className=" ml-5 font-bold text-sm leading-6">Logout</Text>
                  </View>
                  
                </TouchableOpacity>
              </View>
          )}
          
        
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})