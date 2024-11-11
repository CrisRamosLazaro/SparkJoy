import { StyleSheet } from 'react-native'
import { useState } from 'react'
import * as Yup from 'yup'

import listingsApi from '../api/listings'
import useLocation from '../hooks/useLocation'
import { Form, FormField, FormDropdown, FormImagePicker, SubmitButton } from "../components/forms"
import DropdownItemCategory from '../components/DropdownItemCategory'
import Screen from '../components/Screen'
import categories from '../consts/categories'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image"),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

export default function ListingEditScreen() {

    const location = useLocation()
    const [uploadProgress, setUploadProgress] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleSubmit = async values => {

        setIsModalVisible(true)

        const { title, price, category, description, images } = values
        const data = new FormData()

        data.append('title', title)
        data.append('price', price)
        data.append('categoryId', category.id)
        data.append('description', description)

        images.forEach((img, i) => data.append('images', {
            name: `image${i}`,
            type: 'image/jpeg',
            uri: img,
        }))

        if (location) data.append('location', JSON.stringify(location))

        // Prepare the form data for chunked upload
        const formDataWithoutImg = { title, price, categoryId: category.id, description, location }

        try {
            const response = await listingsApi.createListing(data, formDataWithoutImg, setUploadProgress)
            console.log('Response:', response)
            setIsModalVisible(false)

            alert('Success')
        } catch (error) {
            console.error('Error creating listing:', error)
            alert('Error saving your listing')
        }
    }


    return (
        <Screen style={styles.container}>
            <UploadScreen progress={uploadProgress} visible={isModalVisible} />
            <Form
                initialValues={{
                    images: [],
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    name='images'
                />
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