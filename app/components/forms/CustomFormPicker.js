import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import CustomPicker from '../CustomPicker'
import ErrorMessage from './ErrorMessage'


export default function CustomFormPicker({ items, name, placeholder }) {

    const { setFieldValue, errors, touched, values } = useFormikContext()

    return (
        <>
            <CustomPicker
                items={items}
                onSelectItem={item => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}

const styles = StyleSheet.create({})