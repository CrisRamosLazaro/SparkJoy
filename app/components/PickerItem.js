import { StyleSheet, TouchableOpacity } from 'react-native'
import BodyText from './BodyText'

export default function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <BodyText style={styles.text}>{label}</BodyText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    text: {
        padding: 20
    }
})