import { StyleSheet, Image, View, TouchableWithoutFeedback, Alert } from 'react-native'
import { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import IconBox from './IconBox'
import defaultStyles from '../config/styles'


export default function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) {
            alert('Permission required to access the library')
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.5 })
            if (!result.canceled) onChangeImage(result.assets[0].uri)
        } catch (error) {
            console.error('Error reading an image', error)
        }
    }

    const handlePress = () => {
        if (!imageUri) selectImage()
        else Alert.alert("Delete", "Are you sure you want to remove this photo?", [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ])
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View>
                {!imageUri && <IconBox
                    bgColor={defaultStyles.colors.light}
                    borderRadius='15%'
                    icon="camera"
                    iconColor={defaultStyles.colors.medium}
                    size={100}
                />}
                <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    image: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '15%',
        height: 100,
        width: 100,
    }

})