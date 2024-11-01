import { StyleSheet, View, FlatList } from 'react-native'
import { useEffect } from 'react'

import routes from '../routes/routes'
import listingsApi from '../api/listings'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'
import Button from '../components/Button'
import Card from '../components/Card'
import Screen from '../components/Screen'
import TextBox from '../components/TextBox'
import colors from '../config/colors'

export default function ListingsScreen({ navigation }) {

    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

    useEffect(() => { loadListings() }, [])

    return (
        <Screen style={styles.screen}>
            <ActivityIndicator visible={loading} />

            <View style={styles.container}>
                {error && (
                    <>
                        <TextBox>Couldn't fetch the listings</TextBox>
                        <Button text={"Retry"} onPress={loadListings} />
                    </>
                )}

                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subtitle={"$" + item.price}
                            imageUrl={item.images[0].url}
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