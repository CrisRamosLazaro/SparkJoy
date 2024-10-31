import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyAccountScreen from '../screens/MyAccountScreen'
import MessagesScreen from '../screens/MessagesScreen'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='MyAccount' component={MyAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MyMessages' component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator