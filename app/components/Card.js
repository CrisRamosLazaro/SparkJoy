import { StyleSheet, View, Image } from 'react-native'
import colors from '../config/colors'
import BodyText from './BodyText'

export default function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.textDeetsContainer}>
                <BodyText style={styles.title}>{title}</BodyText>
                <BodyText style={styles.subtitle}>{subtitle}</BodyText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    title: {
        color: "dark",
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    textDeetsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200
    }
})