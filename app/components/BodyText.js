import { Text } from 'react-native'

import defaultStyles from '../config/styles'

export default function BodyText({ children, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>
            {children}
        </Text>
    )
}