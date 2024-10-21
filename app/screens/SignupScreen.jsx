import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { CustomForm, CustomFormField, SubmitButton } from "../components/forms"
import Screen from '../components/Screen'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
})

export default function SignupScreen() {

    return (
        <Screen style={styles.container}>

            <CustomForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => { console.log(values) }}
                validationSchema={validationSchema}
            >
                <CustomFormField
                    name='name'
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="account"
                    keyboardType="email-address"
                    placeholder="Name"
                    textContentType="emailAddress"
                />
                <CustomFormField
                    name='email'
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <CustomFormField
                    name='password'
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="lock"
                    keyboardType="email-address"
                    placeholder="Password"
                    textContentType="emailAddress"
                />

                <SubmitButton text="register" />
            </CustomForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
})