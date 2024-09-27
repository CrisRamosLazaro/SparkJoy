import { StyleSheet, View, Image, Text } from 'react-native'
import item from "../assets/sparkjoy-chair-for-sale.jpg"
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons"

const ViewImageScreen = () => {

    return (
        <View style={styles.container}>
            <View
                style={styles.closeIcon}
            >
                <MaterialCommunityIcons name="close" color={colors.white} size="30" />
            </View>
            <View
                style={styles.deleteIcon}
            >
                <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size="35" />
            </View>
            <Image
                source={item}
                style={styles.image}
                resizeMode="contain"
            />

        </View>
    )

}

export default ViewImageScreen

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.dark,
        flex: 1
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})