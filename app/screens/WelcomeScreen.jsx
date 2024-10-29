import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native'

import Button from '../components/Button'

import colors from '../config/colors'
import hero from '../assets/sparkjoy-bg.jpg'
import logo from '../assets/sparkjoy-logo.png'


export default WelcomeScreen = ({ navigation }) => {

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
                    text='login'
                    bgColor={colors.primary}
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    text='register'
                    bgColor={colors.secondary}
                    onPress={() => navigation.navigate('Signup')} />
            </View>
        </ImageBackground>
    )

}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        width: '100%',
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    text: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20
    },
})