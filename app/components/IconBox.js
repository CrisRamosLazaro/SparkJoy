import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function IconBox({
    icon,
    bgColor = "#2c2c2c",
    iconColor = "#fff",
    size = 40
}) {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            width: size,
            height: size,
            borderRadius: "100%",
            backgroundColor: bgColor
        }}>
            <MaterialCommunityIcons
                name={icon}
                size={size / 1.5}
                color={iconColor}
            />
        </View>
    )
}