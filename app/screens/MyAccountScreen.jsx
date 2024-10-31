import { StyleSheet, View, FlatList } from 'react-native'

import { ListItem, Separator } from '../components/lists/index'
import IconBox from '../components/IconBox'
import Screen from '../components/Screen'
import person1 from '../assets/person1.jpg'
import colors from '../config/colors'

const menuItems = [
    {
        title: 'My Listings',
        icon: 'format-list-bulleted',
        bgColor: colors.primary,
        size: 50,
        screen: ''

    },
    {
        title: 'My Messages',
        icon: 'email',
        bgColor: colors.secondary,
        size: 50,
        screen: 'MyMessages'
    }
]

export default function MyAccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container1}>
                <ListItem
                    title="Spooky Higgs"
                    description="spooky@higgs.com"
                    image={person1}
                />
            </View>
            <View style={styles.container2}>
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
                            onPress={() => navigation.navigate(item.screen)}
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

    container1: {
        marginVertical: 20,
        height: 110
    },
    container2: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }

})