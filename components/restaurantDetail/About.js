import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
    name: "Wagamama",
    image: "https://gymjunkies.nl/wp-content/uploads/2018/04/wagamama-utrecht-hotspot.jpg",
    reviews: '1500',
    categories: [
        { title: "Indian" }, 
        { title: "Comford Food" },
        { title: "Drinks" },
        { title: "Snacks" },
    ],
};

const { name, image, price, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${price ? " • " + price : ""}`;




export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}
    >
        {props.title}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}
    >
        {props.description}
    </Text>
)

