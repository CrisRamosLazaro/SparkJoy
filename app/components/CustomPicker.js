import { StyleSheet, TouchableWithoutFeedback, View, Modal, Button, FlatList } from 'react-native'
import { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BodyText from './BodyText'
import PickerItem from './PickerItem'
import Screen from './Screen'

import defaultStyles from '../config/styles'

export default function CustomPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
                <View style={styles.container}>

                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            color={defaultStyles.colors.medium}
                            size={20}
                            style={styles.icon}
                        />}

                    {selectedItem ? (
                        <BodyText style={styles.text}>{selectedItem.label}</BodyText>
                    ) : (
                        <BodyText style={styles.placeholder}>{placeholder}</BodyText>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={defaultStyles.colors.medium}
                        size={20}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal
                visible={showModal}
                animationType="slide"
            >
                <Screen>
                    <Button title="close" onPress={() => setShowModal(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => <PickerItem
                            label={item.label}
                            onPress={() => {
                                setShowModal(false)
                                onSelectItem(item)
                            }}
                        />}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
    text: {
        flex: 1,
    }

})