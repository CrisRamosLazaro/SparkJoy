import { StyleSheet, SafeAreaView } from 'react-native'
import Constants from "expo-constants"
import { GestureHandlerRootView } from 'react-native-gesture-handler'



export default function Screen({ children }) {
    return (
        // <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
        // </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    },
    container: {
        flex: 1,
    },
})