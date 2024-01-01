import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import { ScrollView } from 'react-native-gesture-handler'
//
const Carousel = () => {
  const slides = [
    {
      name: "St. Crystal",
      price: 4350,
      image:
        "https://images.unsplash.com/photo-1629079448081-c6ab9cbea877?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "2016  Road, Texas",
      rooms: 8,
      toilet: 2,
      favourite: true,
    },

    {
      name: "Faulker Ave.",
      price: 4350,
      image:
        "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Highland Lake, FL",
      rooms: 8,
      toilet: 2,
      favourite: false,
    },

    {
      name: "The Old Steele",
      price: 4350,
      image:
        "https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Palm Habour, Tx",
      rooms: 8,
      toilet: 2,
      favourite: true,
    },

    // "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    // "",
    // "https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <View classNames="flex-1 items-center justify-center">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="space-x-4"
      >
        {slides.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-4"
            >
              <View className="rounded-2xl   grid  h-[260px] w-[190px]">
                <Image
                  source={{ uri: item.image }}
                  //   style={{width:70, height:50}}
                  className="h-[140px] mt-3 w-[90%] rounded-xl mx-auto"
                ></Image>
                <Text className="font-black p-2 text-md">{item.name}</Text>
                      <View className=" flex flex-row w-full gap-x-1 p-2 ">
                          
                  {/* <Ionicons
                    name="location-outline"
                    size={18}
                    className=""
                    color={"#ccc"}
                  /> */}
                  <Text className=" text-sm  text-gray-400 font-bold">
                    {item.location}
                  </Text>
                </View>

                <View className="flex flex-row p-2 gap-x-3 ">
                  <View className="flex flex-row gap-x-1">
                    <Ionicons name="bed-outline" color={'#818181'} size={18} />
                    <Text className="text-[#818181]">3</Text>
                          </View>
                          

                          <View className="flex flex-row gap-x-1">
                    <MaterialIcons color={'#818181'} name="bathtub" outline size={18} />
                    <Text className="text-[#818181]">3</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Carousel;
