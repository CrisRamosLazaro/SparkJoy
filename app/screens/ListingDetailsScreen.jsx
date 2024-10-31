import { StyleSheet, View, Image } from 'react-native'

import avatar from "../assets/person1.jpg"

import TextBox from '../components/TextBox'
import ListItem from '../components/lists/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen({ route }) {

    const listing = route.params

    return (
        <View >
            <Image
                source={listing.image}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <TextBox style={styles.text}>{listing.title}</TextBox>
                <TextBox style={styles.price}>${listing.price}</TextBox>
                <View style={styles.userContainer}>
                    <ListItem
                        image={avatar}
                        title="Avatash Vatar"
                        description="3 listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20
    },
    userContainer: {
        marginVertical: 40,
        height: 110
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical: 10
    }
})