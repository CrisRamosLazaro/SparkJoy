import { StyleSheet, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import IconBox from '../components/IconBox'
import person1 from '../assets/person1.jpg'
import colors from '../config/colors'
import Separator from '../components/Separator'

const menuItems = [
    {
        title: "My Listings",
        icon: "format-list-bulleted",
        bgColor: colors.primary,
        size: 50
    },
    {
        title: "My Messages",
        icon: "email",
        bgColor: colors.secondary,
        size: 50
    }
]

export default function MyAccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Spooky Higgs"
                    description="spooky@higgs.com"
                    image={person1}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={Separator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<IconBox
                                icon={item.icon}
                                bgColor={item.bgColor}
                                size={item.size}
                            />}
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<IconBox
                    icon="logout"
                    bgColor={colors.danger}
                    size={50}
                />}
            />

        </Screen>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light,
    }

})