import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import ShoppingBagIcon from 'react-native-heroicons/outline/ShoppingBagIcon'
import EllipsisVerticalIcon from 'react-native-heroicons/outline/EllipsisVerticalIcon'
import Products from './products'
const Home = () => {
  return (
    <View className="">
     <SafeAreaView className="p-5">
      <View className="flex w-full flex-row justify-between">
        <Text className="text-2xl font-bold">Search Products</Text>
        <View className="flex-row gap-3" >
<ShoppingBagIcon color="black"/>
<EllipsisVerticalIcon color="black"/>
        </View>
      </View>
      <View>
      <TextInput placeholder='Try "Air force 07" ' className="bg-gray-200 p-4 rounded-2xl mt-5" />
      </View>
      <Products/>
     </SafeAreaView>
    </View>
  )
}

export default Home