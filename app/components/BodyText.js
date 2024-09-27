import { Platform, Text } from 'react-native'
import { StyleSheet } from 'react-native'

export default function BodyText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    )
}



const styles = StyleSheet.create({
    text: {
        color: "dark",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})