import { useFormikContext } from 'formik'

import ImageInputList from '../lists/ImageInputList'
import ErrorMessage from './ErrorMessage'


export default function FormImagePicker({ name }) {

    const { errors, setFieldValue, touched, values } = useFormikContext()
    const displayedImages = values[name]

    const handleAdd = uri => {
        setFieldValue(name, [...displayedImages, uri])
    }

    const handleRemove = uri => {
        setFieldValue(name, displayedImages.filter(imgUri => imgUri !== uri))
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