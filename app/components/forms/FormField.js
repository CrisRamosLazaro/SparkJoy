import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

export default function CustomFormField({ name, width, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}

const styles = StyleSheet.create({})