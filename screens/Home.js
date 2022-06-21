import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY = "OnuYS3nbICH8joQ9spRUbzO3NBYsbapyMzzXqhqqH4UqX4ING4_zfcVkTs7p5x46OYRGUwdZ8Wdg0Auqm4LeYNalMlHFIAobLz8djZyfmV3Bo71cJzt_RdH7y5uwYnYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [])

    return (
        <SafeAreaView style={{
            backgroundColor: "#eee",
            flex: 1,
        }}>
            <View style={{
                backgroundColor: "white",
                padding: 15
            }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} cityHandler={setCity} />
            </ScrollView>
        </SafeAreaView>
    );
}