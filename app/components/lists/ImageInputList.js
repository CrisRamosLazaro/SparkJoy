import { ScrollView, StyleSheet, View } from 'react-native'
import { useRef } from 'react'
import ImageInput from '../ImageInput'


export default function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {

    const scrollView = useRef()

    return (
        <View>
            <ScrollView
                ref={scrollView}
                horizontal
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris.map(uri => (
                        <View key={uri} style={styles.cell}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput
                        onChangeImage={onAddImage}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    cell: {
        marginRight: 10
    }
})