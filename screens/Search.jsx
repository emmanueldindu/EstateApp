import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import SearchTitle from "../components/Products/SearchTitle";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (key) => {
    try {
      const response = await axios.get(
        `https://estateapi.onrender.com/api/products/search/${key}`
      );
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Failed to get products");
    }
  };

  useEffect(() => {
    // Trigger the search when searchKey changes
    if (searchKey.length > 0) {
      handleSearch(searchKey);
    } else {
      // Clear the results if searchKey is empty
      setSearchResults([]);
    }
  }, [searchKey]);

  return (
      <SafeAreaView>
          {/* <View className="grid"> */}
        <View className="  flex-row  justify-between content-center  bg-gray-200  rounded-xl px-3 my-6 h-12 w-full">
          <TouchableOpacity className="my-auto">
            <Feather name="search" size={22} className="my-auto" />
          </TouchableOpacity>
          <View className="rounded-sm justify-start items-start">
            <TextInput
              className="w-full h-full px-2"
              value={searchKey}
              onChangeText={setSearchKey}
              placeholder="search your favourite location"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => handleSearch()}
              className="w-6 h-full my-auto justify-center items-center"
            >
              <Ionicons name="search" size={22} color={"#6CB2EB"} />
            </TouchableOpacity>
          </View>
          </View>
          
      
              
        {searchKey.length === 0 ? (
          <View style={{ flex: 1, }}>
            <Image
              className=" w-[100%] h-[500px] mx-auto "
              style={{ resizeMode: "contain", opacity: 0.9 }}
              source={require("../assets/p1.png")}
            />
            {/* <Text>no result</Text> */}
          </View>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <SearchTitle item={item} />}
          />
              )}
              

         
              {/* </View>              */}
    </SafeAreaView>
  );
};

export default Search;
