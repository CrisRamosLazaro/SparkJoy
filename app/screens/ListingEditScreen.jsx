import { StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'

import useApi from '../hooks/useApi'
import useLocation from '../hooks/useLocation'
import listingsApi from '../api/listings'
import { Form, FormField, FormDropdown, FormImagePicker, SubmitButton } from "../components/forms"
import Screen from '../components/Screen'
import DropdownItemCategory from '../components/DropdownItemCategory'
import categories from '../consts/categories'

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image"),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

export default function ListingEditScreen() {

    const location = useLocation()

    const data = new FormData()
    data.append('title', title)
    data.append('price', price)
    data.append('categoryID', category.id)
    data.append('description', description)

    images.forEach((img, i) => data.append('images', {
        name: 'image' + i,
        type: 'image/jpeg',
        uri: img
    }))
    if (location) data.append('location', JSON.stringify(location))


    const handleNewUserSubmit = e => {
        e.preventDefault()

    }

    const { data: newListing, error, loading, request: sendNewListing } = useApi(listingsApi.saveListing)


    return (
        <Screen style={styles.container}>

            <Form
                initialValues={{
                    images: [],
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={values => { console.log(values) }}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    name='images'
                />
                <Text>{text}</Text>
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
                    DropdownItemComponent={DropdownItemCategory}
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