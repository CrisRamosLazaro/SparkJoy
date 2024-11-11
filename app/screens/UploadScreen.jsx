import { Modal, StyleSheet, View } from 'react-native'
import Text from '../components/TextBox'

export default function UploadScreen({ progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <Text>{Math.round(progress * 100)}%</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})