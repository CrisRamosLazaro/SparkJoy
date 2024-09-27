import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function CustomButton({ text, bgColor, onPress }) {
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
        width: '100%',
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