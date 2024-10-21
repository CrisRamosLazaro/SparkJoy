import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import BodyText from '../BodyText'
import colors from '../../config/colors'

export default function ListItem({ title, description, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image &&
                        <Image
                            source={image}
                            style={styles.image}
                        />
                    }
                    <View style={styles.textBox}>
                        <BodyText style={styles.title}>{title}</BodyText>
                        {description &&
                            <BodyText style={styles.subtitle}>
                                {description}
                            </BodyText>
                        }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        color: colors.medium
    },
    textBox: {
        marginLeft: 10,
        justifyContent: "center"
    }
})