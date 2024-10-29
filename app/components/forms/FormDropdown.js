import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import Dropdown from '../Dropdown'
import ErrorMessage from './ErrorMessage'


export default function FormDropdown({ items, columns, name, DropdownItemComponent, placeholder, width }) {

    const { setFieldValue, errors, touched, values } = useFormikContext()

    return (
        <>
            <Dropdown
                items={items}
                columns={columns}
                onSelectItem={item => setFieldValue(name, item)}
                DropdownItemComponent={DropdownItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}

const styles = StyleSheet.create({})