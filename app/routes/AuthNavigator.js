import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.HOME} component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
)

export default AuthNavigator