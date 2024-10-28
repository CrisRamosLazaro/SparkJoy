import { useState } from 'react'
import { useFormikContext } from 'formik'

import ImageInputList from '../lists/ImageInputList'
import ErrorMessage from './ErrorMessage'


export default function FormImagePicker({ imageUris, onAddImage, onRemoveImage, name }) {

    const { errors, touched } = useFormikContext()

    const [displayedImages, setDisplayedImages] = useState([])

    const handleAdd = uri => {
        setDisplayedImages([...displayedImages, uri])
    }

    const handleRemove = uri => {
        setDisplayedImages(displayedImages.filter(imgUri => imgUri !== uri))
    }

    return (
        <>
            <ImageInputList
                imageUris={displayedImages}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}