import { View, Text,  TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {
    const Navigation=useNavigation();
  return (
    <View>
      <SafeAreaView>
      <View className="flexvflex-col items-center justify-between h-full ">
        <View>
            <Text>Welcome</Text>
        </View>
        <View className=" flex-row gap-8 mb-10">
            <TouchableOpacity className="bg-red-200 p-4" onPress={()=>Navigation.navigate("Signup")}>
                <Text>Join Us</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-200 p-4" onPress={()=>Navigation.navigate("Login")}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
        </View>
     
      </SafeAreaView>
    </View>
  )
}

export default Welcome