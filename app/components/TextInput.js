import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function CustomTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, width = { width }]}>
            {icon &&
                <MaterialCommunityIcons
                    name={icon}
                    color={defaultStyles.colors.medium}
                    size={20}
                    style={styles.icon}
                />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }

})

