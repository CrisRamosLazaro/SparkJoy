import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import React from 'react'
import BodyText from './BodyText'
import colors from '../config/colors'

export default function ListItem({ title, description, image, onPress, renderRightActions }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
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
            </TouchableHighlight>
        </Swipeable>
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