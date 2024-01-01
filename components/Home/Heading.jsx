import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Heading() {

const navigation = useNavigation()
  return (
    <View className="mt-6  w-full">
      <View className="flex-row justify-between">
        <Text className="font-black text-base text-gray-600"> Featured Housing</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Ionicons name="ios-grid" size={24} color={'#6CB2EB'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
