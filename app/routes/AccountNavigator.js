import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'

import MyAccountScreen from '../screens/MyAccountScreen'
import MessagesScreen from '../screens/MessagesScreen'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator