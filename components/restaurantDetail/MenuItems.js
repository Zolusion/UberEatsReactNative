import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements/dist/divider/Divider";


const foods = [
    {
        title: "Ebi Katsu",
        description: "Gefrituurde gepaneerde grote garnalen. Geserveerd met een pittige chili knoflooksaus, chili, koriander en verse limoen",
        price: "€7.50",
        image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_340,w_340/f_auto/q_auto/dpr_1.0/v1656410446/static-takeaway-com/images/chains/nl/wagamama/products/sides_ebikatsuwhite"
    },
    {
        title: "Kip Gyoza",
        description: "Gegrilde kip gyoza's geserveerd met dipsaus",
        price: "€19.95",
        image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_340,w_340/f_auto/q_auto/dpr_1.0/v1656410446/static-takeaway-com/images/chains/nl/wagamama/products/sides_steamedchickengyoza"
    },
    {
        title: "Grilled duck donburi",
        description: "Malse ontbeende eend, pittige teriyaki saus, wortels, peultjes, zoete aardappel, rode ui, Japanse kleefrijst, gebakken ei, komkommer, lente-uitjes, kimchee",
        price: "€13.95",
        image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_340,w_340/f_auto/q_auto/dpr_1.0/v1656410446/static-takeaway-com/images/chains/nl/wagamama/products/donburi_grilledduck"
    },
    {
        title: "Katsu power voor 1",
        description: "Ebi katsu, chicken katsu curry en 1 softdrink naar keuze",
        price: "€13.95",
        image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_340,w_340/f_auto/q_auto/dpr_1.0/v1656410446/static-takeaway-com/images/chains/nl/wagamama/products/katsu_power_voor_1"
    },
    {
        title: "Wagamama's klassiekers",
        description: "Gyoza kip van yasai, pad thai garnalen en kip van yasai en 1 frisdrank naar keuze",
        price: "€13.95",
        image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_340,w_340/f_auto/q_auto/dpr_1.0/v1656410446/static-takeaway-com/images/chains/nl/wagamama/products/wagamama_klassiekers"
    },
    {
        title: "Chilli prawn and kimchee ramen",
        description: "Gemarineerde garnalen met staart met taugé, bosui en kimchee. Geserveerd met verse limoen en koriander in een pittige groentebouillon",
        price: "€13.95",
        image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_1:1,c_thumb,h_340,w_340/f_auto/q_auto/dpr_1.0/v1656410446/static-takeaway-com/images/chains/nl/wagamama/products/ramen_chilliprawnkimchee"
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    }
})

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View
        style={{
            width: 240,
            justifyContent: "space-evenly",
        }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
            }}
        />
    </View>
)