import { FlatList, StyleSheet, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from "../components/ListItem"

import avatar1 from "../assets/person1.jpg"
import avatar2 from "../assets/person2.jpg"
import Separator from '../components/Separator'
import ListItemDelete from '../components/ListItemDelete'

const messages = [
    {
        id: 1,
        title: "Title 1",
        description: "Lorem ipsum",
        image: avatar1
    },
    {
        id: 2,
        title: "Title 2",
        description: "Curabitur at molestie enim.",
        image: avatar2
    },
]

export default function MessagesScreen() {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log("Selected:", item)}
                        renderRightActions={() => <ListItemDelete
                            onPress={() => console.log(item)}
                        />}
                    />}
                ItemSeparatorComponent={Separator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

}) 