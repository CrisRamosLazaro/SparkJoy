import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { Form, FormField, FormDropdown, SubmitButton } from "../components/forms"
import Screen from '../components/Screen'
import DropdownItemCategory from '../components/DropdownItemCategory'

import categories from '../consts/categories'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

export default function ListingEditScreen() {
    console.log("eeeh categories", categories)

    return (
        <Screen style={styles.container}>

            <Form
                initialValues={{
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={values => { console.log(values) }}
                validationSchema={validationSchema}
            >
                <FormField
                    name='title'
                    maxLength={255}
                    placeholder="Title"
                />
                <FormField
                    name='price'
                    keyboardType="numeric"
                    maxLength={8}
                    placeholder="Price"
                    width="33%"
                />
                <FormDropdown
                    items={categories}
                    columns={3}
                    name='category'
                    PickerItemComponent={DropdownItemCategory}
                    placeholder="Category"
                    width="50%"
                />
                <FormField
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    name='description'
                    placeholder="Description"
                />

                <SubmitButton text="post" />
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
})