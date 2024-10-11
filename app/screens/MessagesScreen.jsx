import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import ListItem from "../components/ListItem"

import avatar1 from "../assets/person1.jpg"
import avatar2 from "../assets/person2.jpg"
import Separator from '../components/Separator'
import ListItemDelete from '../components/ListItemDelete'

const initialMessages = [
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

    const [messages, setMessages] = useState(initialMessages)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter((msg) => msg.id !== message.id))
    }

    return (
        <Screen style={styles.screen}>
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
                            onPress={() => handleDelete(item)}
                        />}
                    />}
                ItemSeparatorComponent={Separator}
                refreshing={isRefreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "Title 2",
                            description: "Curabitur at molestie enim.",
                            image: avatar2
                        },
                    ])
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

}) 