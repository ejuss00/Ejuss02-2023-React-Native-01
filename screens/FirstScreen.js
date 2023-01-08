import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";



// import { HeroImage } from "../assets";


function FirstScreen() {

    const navigation = useNavigation();
    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* First Section */}

            <View className="flex-row px-6 mt-20 items-center justify-center">
                <Text className="text-[#5499DF] text-5xl font-semibold text-center">Orijin</Text>
            </View>


            {/* Second Section */}
            <View className="px-6 mt-8 space-y-0.5">
                <Text className="text-[#3C6072] text-[26px]">Cashless Split Bill</Text>
                <Text className="text-[#67A4E2] text-[26px] font-bold">
                    Payment
                </Text>
            </View>

            {/* Circle Section */}
            <View className="z-10 w-[200px] h-[200px] bg-[#67A4E2] rounded-full absolute bottom-40 -right-36"></View>
            <View className="z-10 w-[200px] h-[200px] bg-[#AFCFF0] rounded-full absolute bottom-60 -left-36"></View>

            {/* Image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={require('../assets/hero.png')}
                    className="w-full h-full scale-50 object-cover mt-30"
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate("HomePage")}
                    className=" bottom-20 w-64 h-19 border-2 border-[#438FDC] items-center justify-center rounded-full"
                >
                    <View className="w-60 h-15 m-1 items-center justify-center bg-[#438FDC] rounded-full"
                    >
                        <Text className="text-gray-50 text-[30px] font-semibold">Sign In</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("HomePage")}
                    className="m-2 bottom-20 w-64 h-19 border-2 border-[#3b3b3b] items-center justify-center rounded-full"
                >
                    <View className="w-60 h-15 m-1 items-center justify-center bg-[#ebebeb] rounded-full"
                    >
                        <Text className=" text-gray-700 text-[30px] font-semibold">Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};



export default FirstScreen;
