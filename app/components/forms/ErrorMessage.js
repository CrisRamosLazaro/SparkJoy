import { StyleSheet } from 'react-native'
import TextBox from '../TextBox'

export default function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null

    return (
        <TextBox style={styles.error}>{error}</TextBox>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})