import { Modal, StyleSheet, View, Text } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'
import colors from '../config/colors'
import done from '../assets/animations/done.json'

export default function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        color={colors.primary}
                        progress={progress}
                    />
                ) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={done}
                        style={styles.animation}
                    />
                )
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    animation: {
        width: 150,
        height: 150
    },
})