import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import BodyText from './BodyText'
import colors from '../config/colors'

export default function ListItem({ title, description, image }) {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <View>
                <BodyText style={styles.title}>{title}</BodyText>
                <BodyText style={styles.subtitle}>{description}</BodyText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        color: colors.medium
    }
})