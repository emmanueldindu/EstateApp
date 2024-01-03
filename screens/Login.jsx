import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Backbtn from "../components/Backbtn";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [secure, setSecure] = useState(false);


  const logged = async (values) => {
    setLoader(true)
    // console.log(values)

    try {
      const apiUrl = 'https://estateapi.onrender.com/api/login';
      const data = values;

      const response = await axios.post(apiUrl, data)

      if (response.status === 200) {
        setLoader(false)
        console.log(response.data)


        // setResponseData(response.data)
        // console.log(`users${responseData._id}`);
        if (response.data && response.data._id) {
          await AsyncStorage.setItem(
            `users${response.data._id}`,
            JSON.stringify(response.data),
            console.log(`users${response.data._id}`)
          );


          await AsyncStorage.setItem('id', JSON.stringify(response.data._id))
          navigation.replace('Bottom Navigation')
       

        } else {
          console.error('Invalid response data', response.data)
        }



        // await AsyncStorage.setItem(
        //   `users${responseData._id}`,
        //   JSON.stringify(responseData)
        // )
       
      

      } else {
        Alert.alert("Error Logging in", {error}, [
          {
            text: "Cancel",
            onPress: () => console.log("cancel pressed"),
          },
    
          {
            text: "Continue",
            onPress: () => console.log("Delete pressed"),
          },
          // {defaultIndex : 1}
        ]);
      }

    } catch (error) {
      console.error('Login Error', error)

      Alert.alert("Error", `Error Logging in: ${error.message}`, [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
        },
  
        {
          text: "Continue",
          onPress: () => console.log("Delete pressed"),
        },
        // {defaultIndex : 1}
      ]);
    } finally {
      setLoader(false)
    }
  }
 

  const invalid = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },

      {
        text: "Continue",
        onPress: () => console.log("Delete pressed"),
      },
      // {defaultIndex : 1}
    ]);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View className="mx-4 mt-2">
          <Backbtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/pa.png")}
            className="h-[250px] object-cover w-[100%] bg-contain"
          />
          <Text className="mx-auto mb-6 mt-4 font-black text-xl items-center  text-black">
            The Best Of Real Estate{" "}
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => logged(values)}
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
                <View className="mt-12 ">
                  <Text className="text-right mb-2 text-xs">Email</Text>
                  <View className="border h-[40px] bg-white p-2 rounded-lg flex-row items-center border-gray-100 ">
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={18}
                      color={"gray"}
                      // className="p-4"
                    />
                    <TextInput
                      className="pl-2"
                      placeholder="Enter email"
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text className="text-red-500 mt-2 font-bold text-xs">
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View className="">
                  <Text className="text-right  text-xs">Password</Text>
                  <View className="border h-[40px] bg-white p-2 rounded-lg flex-row items-center border-white ">
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={18}
                      color={"gray"}
                      // className="p-4"
                    />
                    <TextInput
                      secureTextEntry={secure}
                      className="pl-2"
                      placeholder=" Password"
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setSecure(!secure);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={secure ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text className="text-red-500 mt-2 font-bold text-xs">
                      {errors.password}
                    </Text>
                  )}
                </View>
                <Button
                  loader={loader}
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : invalid}
                  isValid={isValid}
                />
                <Text
                  className="text-center mt-4 font-bold"
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  Register
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
