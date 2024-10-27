import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import TextBox from '../TextBox'
import defaultStyles from '../../config/styles'

export default function ListItem({ title, description, image, IconComponent, onPress, renderRightActions, showChevron }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                underlayColor={defaultStyles.colors.light}
                onPress={onPress}
            >
                <View style={styles.stripeContainer}>
                    <View style={styles.infoContainer}>

                        {IconComponent}
                        {image &&
                            <Image
                                source={image}
                                style={styles.image}
                            />
                        }
                        <View style={styles.textBox}>
                            <TextBox style={styles.title}>{title}</TextBox>
                            {description &&
                                <TextBox style={styles.subtitle} multiline numberOfLines={5}>
                                    {description}
                                </TextBox>
                            }
                        </View>
                    </View>
                    {showChevron &&
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={defaultStyles.colors.medium}
                            size={20}
                        />}
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    stripeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: defaultStyles.colors.white
    },
    infoContainer: {
        flexDirection: "row",
        flex: 1
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
        color: defaultStyles.colors.medium,
    },
    textBox: {
        marginLeft: 10,
        justifyContent: "center",
        maxWidth: "70%"
    }
})