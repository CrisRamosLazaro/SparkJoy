import { StyleSheet, TouchableOpacity } from 'react-native'
import TextBox from './TextBox'

export default function DropdownItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <TextBox style={styles.text}>{item.label}</TextBox>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    text: {
        padding: 20
    }
})