import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import CustomButton from '../CustomButton'

export default function SubmitButton({ text }) {

    const { handleSubmit } = useFormikContext()

    return (
        <CustomButton
            text={text}
            onPress={handleSubmit}
        />
    )
}

const styles = StyleSheet.create({})