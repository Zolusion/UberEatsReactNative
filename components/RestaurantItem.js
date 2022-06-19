import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
        </View>
    );
}

const RestaurantImage = () => (
    <>
        <Image source={{
            uri: "https://westcordhotels.nl/wp-content/uploads/sites/10/2019/06/westcord-wtc-hotel-restaurant-eleve-tafels.jpg"
        }}
            style={{
                width: "100%",
                height: 180
            }}
        />
        <TouchableOpacity
            style={{
                position: "absolute",
                right: 20,
                top: 20
            }}>
            <MaterialCommunityIcons
                name='heart-outline'
                size={25}
                color='#ffffff' />
        </TouchableOpacity>
    </>
);