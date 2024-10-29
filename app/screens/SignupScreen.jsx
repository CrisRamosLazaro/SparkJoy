import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { Form, FormField, SubmitButton } from "../components/forms"
import Screen from '../components/Screen'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
})

export default SignupScreen = () => {

    return (
        <Screen style={styles.container}>

            <Form
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => { console.log(values) }}
                validationSchema={validationSchema}
            >
                <FormField
                    name='name'
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="account"
                    keyboardType="email-address"
                    placeholder="Name"
                    textContentType="emailAddress"
                />
                <FormField
                    name='email'
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    name='password'
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="lock"
                    keyboardType="email-address"
                    placeholder="Password"
                    textContentType="emailAddress"
                />

                <SubmitButton text="register" />
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
})