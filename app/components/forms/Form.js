import { StyleSheet } from 'react-native'
import { Formik } from 'formik'

export default function CustomForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}

        </Formik>
    )
}

const styles = StyleSheet.create({})