import { StyleSheet, TouchableWithoutFeedback, View, Modal, Button, FlatList } from 'react-native'
import { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TextBox from './TextBox'
import DropdownItemSimple from './DropdownItemSimple'
import Screen from './Screen'

import defaultStyles from '../config/styles'

export default function Dropdown({
    icon,
    items,
    columns = 1,
    onSelectItem,
    DropdownItemComponent = DropdownItemSimple,
    placeholder,
    selectedItem,
    width = "100%",
}) {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
                <View style={[styles.container, width = { width }]}>

                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            color={defaultStyles.colors.medium}
                            size={20}
                            style={styles.icon}
                        />}

                    {selectedItem ? (
                        <TextBox style={styles.text}>{selectedItem.label}</TextBox>
                    ) : (
                        <TextBox style={styles.placeholder}>{placeholder}</TextBox>
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
                        numColumns={columns}
                        renderItem={({ item }) => <DropdownItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setShowModal(false)
                                onSelectItem(item)
                                console.log("ITEM", item)
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
    },

})