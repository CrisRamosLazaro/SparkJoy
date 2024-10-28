import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function IconBox({
    icon,
    bgColor = "#2c2c2c",
    borderRadius = "100%",
    iconColor = "#fff",
    size = 200
}) {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            width: size,
            height: size,
            borderRadius: borderRadius,
            backgroundColor: bgColor
        }}>
            <MaterialCommunityIcons
                name={icon}
                size={size / 1.6}
                color={iconColor}
            />
        </View>
    )
}