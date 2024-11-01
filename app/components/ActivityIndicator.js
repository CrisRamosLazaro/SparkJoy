import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native';
import loader from '../assets/animations/loader.json'

export default function ActivityIndicator({ visible = false }) {
    if (!visible) return null
    return (
        <View style={styles.container}>
            <LottieView
                source={loader}
                autoPlay
                loop
                style={styles.lottie}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    lottie: {
        width: 200,
        height: 200,
    },
});