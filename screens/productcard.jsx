import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import HeartIcon from 'react-native-heroicons/outline/HeartIcon';
import { useNavigation } from '@react-navigation/native';
import ChevronLeftIcon from 'react-native-heroicons/outline/ChevronLeftIcon';
import ShoppingBagIcon from 'react-native-heroicons/outline/ShoppingBagIcon';
import EllipsisVerticalIcon from 'react-native-heroicons/outline/EllipsisVerticalIcon';

const Productcard = (props) => {
    const navigation=useNavigation();
    const {id,name,price,description,image}=props.route.params;
   
  return (
    <View className="bg-[#F6F6F6]">
    <SafeAreaView className="p-4 space-y-7">
    <View className="flex flex-row w-full justify-between items-center">
                <TouchableOpacity onPress={()=>navigation.goBack()} className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-gray-200  ">
                    <ChevronLeftIcon color="black" size="30" />
                </TouchableOpacity>
                <View className="flex-row gap-3" >
<ShoppingBagIcon color="black"/>
<EllipsisVerticalIcon color="black"/>
        </View>
                 </View>
      <View>
      <Text className="text-5xl font-semibold ">{name}</Text>
      </View>
      <View >
        <Image className="w-96 h-96 -rotate-[20deg] relative right-7" source={{uri : image}} />
      </View>
     
      <Text className="text-md text-gray-500">{description}</Text>
      <Text className="text-4xl font-bold">{price}$</Text>
      <View className="flex-row justify-between items-center px-2">
      <HeartIcon color="black" size="40px"  />
        <TouchableOpacity className="p-4 w-72 bg-black rounded-2xl">
            <Text className="text-white text-center font-bold text-xl ">Buy Now</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </View>
  )
}

export default Productcard