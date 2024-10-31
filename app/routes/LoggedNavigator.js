import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import routes from './routes'

import ListingsNavigator from './ListingsNavigator'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountNavigator from './AccountNavigator'
import NewListingButton from '../components/NewListingButton'

const Tab = createBottomTabNavigator()

const LoggedNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={routes.LISTING_NAV}
            component={ListingsNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
        />
        <Tab.Screen
            name={routes.LISTING_EDIT}
            component={ListingEditScreen}
            options={({ navigation }) => ({
                headerShown: false,
                tabBarButton: () => <NewListingButton
                    onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                />,
            })}
        />
        <Tab.Screen
            name={routes.ACCOUNT_NAV}
            component={AccountNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
            }}
        />
    </Tab.Navigator>
)

export default LoggedNavigator