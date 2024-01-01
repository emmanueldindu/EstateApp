import { View, Text, ScrollView, Alert, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Backbtn from "../components/Backbtn";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";


const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .required("Required"),
    email: Yup.string().email("Invalid email address")
        .required("Required"),
        username: Yup.string().min(3, "Username should be at least 3 characters.")
        .required("Required"),
        location: Yup.string().min(3, "Location should be at least 3 characters.")
        .required("Required"),

  });
  
const Register = ({ navigation }) => {
    

    const [loader, SetLoader] = useState(true);
    const [responseData, setResponseData] = useState(null);
    const [secure, setSecure] = useState(false);


    
  const invalid = () => {
    Alert.alert(
      "Invalid Form",
      "Please provide all required fields",
      [
        {
          text: "Cancel", onPress: () => console.log("cancel pressed")
        },

        {
          text: "Continue", onPress: () => console.log("Delete pressed")
        },
        // {defaultIndex : 1}
      ]
    )
  }

  return (
    <ScrollView>
    <SafeAreaView>
      <View className="mx-4 mt-2">
        <Backbtn onPress={() => navigation.goBack()} />
        <Image
          source={require("../assets/su.png")}
          className="h-[280px] object-cover w-[100%] bg-contain"
        />
        {/* <Text className="mx-auto mb-6 mt-2 font-black text-xl items-center  text-black">
          The Best Of Real Estate{" "}
        </Text> */}

        <Formik
          initialValues={{ email: "", password: "", username: "", location: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
            touched,
          }) => (
                          <View>

<View className='mt-12 '>
                <Text className="text-right mb-2 text-xs">Username</Text>
                <View className="border h-[40px] bg-white p-2 rounded-lg flex-row items-center border-gray-100 ">
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={18}
                    color={'gray'}
                    // className="p-4"
                  />
                  <TextInput
                    className="pl-2"
                    placeholder="Enter Username"
                    onFocus={() => (setFieldTouched('username'))}
                    onBlur={() => { setFieldTouched('username', '') }}
                    value={values.username}
                    onChangeText={handleChange('username')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{flex:1}}
                 
                  />
                </View>
                {touched.username && errors.username && (
                  <Text className="text-red-500 mt-2 font-bold text-xs" >{ errors.username}</Text>
                )}
              </View>
                              
              <View className=' '>
                <Text className="text-right mb-2 text-xs">Email</Text>
                <View className="border h-[40px] bg-white p-2 rounded-lg flex-row items-center border-gray-100 ">
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={18}
                    color={'gray'}
                    // className="p-4"
                  />
                  <TextInput
                    className="pl-2"
                    placeholder="Enter email"
                    onFocus={() => (setFieldTouched('email'))}
                    onBlur={() => { setFieldTouched('email', '') }}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{flex:1}}
                 
                  />
                </View>
                {touched.email && errors.email && (
                  <Text className="text-red-500 mt-2 font-bold text-xs" >{ errors.email}</Text>
                )}
              </View>

                              

                            

              <View className=''>
                <Text className="text-right  text-xs">Password</Text>
                <View className="border h-[40px] bg-white p-2 rounded-lg flex-row items-center border-white ">
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={18}
                    color={'gray'}
                    // className="p-4"
                  />
                  <TextInput
                    secureTextEntry={secure}
                    className="pl-2"
                    placeholder=" Password"
                    onFocus={() => (setFieldTouched('password'))}
                    onBlur={() => { setFieldTouched('password', '') }}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{flex:1}}
                 
                  />
                  <TouchableOpacity onPress={() => {setSecure(!secure)}} >
                    <MaterialCommunityIcons name={secure ? "eye-outline" : "eye-off-outline"}
                        size={18}                   
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text className="text-red-500 mt-2 font-bold text-xs" >{ errors.password}</Text>
                )}
              </View>

              <View className=' '>
                <Text className="text-right mb-2 text-xs">Location</Text>
                <View className="border h-[40px] bg-white p-2 rounded-lg flex-row items-center border-gray-100 ">
                  <Ionicons
                    name="location-outline"
                    size={18}
                    color={'gray'}
                    // className="p-4"
                  />
                  <TextInput
                    className="pl-2"
                    placeholder="Enter Location"
                    onFocus={() => (setFieldTouched('location'))}
                    onBlur={() => { setFieldTouched('location', '') }}
                    value={values.location}
                    onChangeText={handleChange('location')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{flex:1}}
                 
                  />
                </View>
                {touched.location && errors.location && (
                  <Text className="text-red-500 mt-2 font-bold text-xs" >{ errors.location}</Text>
                )}
              </View>
              <Button title={"S I G N U P"} onPress={isValid ? handleSubmit : invalid} isValid={isValid} />
            {/* <Text className="text-center mt-4 font-bold" onPress={()=> {navigation.navigate('Register')}}>Register</Text> */}
              </View>
          )}
        </Formik>
        </View>
    </SafeAreaView>
        </ScrollView>
  )
}

export default Register