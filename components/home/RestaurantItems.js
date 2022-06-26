import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://a.cdn-hotels.com/gdcs/production191/d935/2b23289e-7564-4da2-acd8-556ea57d1095.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://eatapp.co/riyadh-restaurants/images/benihana-restaurant-1.jpg?height=500&width=850",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 790,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/i/q/p549-15291236995b249373c5b32.jpg?tr=tr:n-xlarge",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 2000,
        rating: 4.4,
    },
];

export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                </View>
            ))}
        </TouchableOpacity>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#ffffff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center"
        }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
)