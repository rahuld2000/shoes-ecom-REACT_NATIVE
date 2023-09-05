import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';



const Login = () => {
   const[email,setemail]=useState("");
const[password,setpassword]=useState("");
let handlelogin=()=>{
   if(email && password){
      signInWithEmailAndPassword(auth,email,password)
   }
   else{

   }
}
  return (
   <View>
   <SafeAreaView className="p-8">
    <View>
    <Text className="text-xl">Email</Text>
       <TextInput value={email} onChangeText={(value)=>{
        setemail(value)
       }} className="bg-white p-3"></TextInput>
    </View>
    <View>
    <Text className="text-xl">Password</Text>
       <TextInput vlaue={password} onChangeText={(value)=>{
        setpassword(value)
       }} className="bg-white p-3"></TextInput>
    </View>
    <TouchableOpacity onPress={handlelogin} className="bg-blue-200 p-4 mt-8 w-24">
       <Text>Sign In</Text>
    </TouchableOpacity>
    </SafeAreaView>
   </View>
  )
}

export default Login