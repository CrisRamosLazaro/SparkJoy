import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native'

import colors from '../config/colors'
import hero from '../assets/sparkjoy-bg.jpg'
import logo from '../assets/sparkjoy-logo.png'

import Button from "../components/Button"

const WelcomeScreen = () => {

    return (
        <ImageBackground
            source={hero}
            style={styles.background}
            blurRadius={4}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Text style={styles.text}>Sell what no longer sparks joy</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    text="login"
                    bgColor={colors.primary}
                    onPress={() => console.log("Tapped")}
                />
                <Button
                    text="register"
                    bgColor={colors.secondary}
                    onPress={() => console.log("Tapped")} />
            </View>
        </ImageBackground>
    )

}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        width: "100%",
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    },
    text: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20
    },
})