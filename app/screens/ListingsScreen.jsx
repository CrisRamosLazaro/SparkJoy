import { StyleSheet, View, FlatList } from 'react-native'

import routes from '../routes/routes'
import Screen from '../components/Screen'
import Card from '../components/Card'
import chair from '../assets/sparkjoy-chair-for-sale.jpg'
import lamp from '../assets/lamp.png'

import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: "Green vintage chair",
        price: 35,
        image: chair
    },
    {
        id: 2,
        title: "Ombre lamp",
        price: 45,
        image: lamp

    }
]

export default function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subtitle={"$" + item.price}
                            image={item.image}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    }
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        padding: 20
    }
})