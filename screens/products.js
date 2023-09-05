import { View, Text,Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import shoes from '../data/data'
import { useNavigation } from '@react-navigation/native'



const Products = () => {
let navigation =useNavigation();

  return (
    <View >
<FlatList data={shoes}
keyExtractor={shoes=>shoes.id}
numColumns={2}
    renderItem={({item})=>{
        return(
            <View className="m-2 ">
       <TouchableWithoutFeedback onPress={()=>navigation.navigate("Productcard",{...item})}>
       <View>
            <Image className="w-44 h-44" source={{ uri: item.image }}/>
            <View className="flex-row justify-between px-2">
            <Text className="font-semibold">{item.name}</Text>
           <Text className="font-semibold">{item.price }$</Text>
            </View>
            </View>
            </TouchableWithoutFeedback>
            </View>
        )
    }}
/>


    </View>
  )
}

export default Products