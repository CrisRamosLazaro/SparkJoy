import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'

import ListingsScreen from '../screens/ListingsScreen'
import ListingsDetailsScreen from '../screens/ListingDetailsScreen'

const Stack = createNativeStackNavigator()

const ListingsNavigator = () => (
    <Stack.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListingsDetailsScreen} />
    </Stack.Navigator>
)

export default ListingsNavigator