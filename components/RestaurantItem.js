import React from "react";
import { View, Text, Image, } from "react-native";

export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
        </View>
    );
}

const RestaurantItem = () => (
    <Image source={{
        uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }}
    style={{width: "100%", height: 180}}
    />
);