import { StyleSheet, View, Image } from 'react-native'

import saleItem from "../assets/sparkjoy-chair-for-sale.jpg"
import avatar from "../assets/person1.jpg"

import TextBox from '../components/TextBox'
import ListItem from '../components/lists/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View >
            <Image
                source={saleItem}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <TextBox style={styles.text}>Grey Chair for sale</TextBox>
                <TextBox style={styles.price}>$200</TextBox>
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