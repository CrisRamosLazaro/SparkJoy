import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import CustomTextInput from '../CustomTextInput'
import ErrorMessage from './ErrorMessage'

export default function CustomFormField({ name, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <CustomTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}

const styles = StyleSheet.create({})