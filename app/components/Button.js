import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function Button({ text, bgColor = colors.secondary, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor }]}
            onPress={onPress}
        >
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        height: 70,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})