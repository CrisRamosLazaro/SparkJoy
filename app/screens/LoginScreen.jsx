import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { CustomForm, CustomFormField, SubmitButton } from "../components/forms"
import Screen from '../components/Screen'

import logo from '../assets/sparkjoy-logo.png'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <CustomForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => { console.log(values) }}
                validationSchema={validationSchema}
            >
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

                <SubmitButton text="login" />
            </CustomForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})