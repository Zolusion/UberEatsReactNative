import React from "react";
import { View, Text } from "react-native";

const image = "https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai - Comfort Food - $$ - :ticket - 4 :stars (2913+)';

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            {/* <RestaurantItem /> */}
            {/* <RestaurantDescription/> */}
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180}} />
);