import { StyleSheet, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/routes/AuthNavigator'
import navigationTheme from './app/routes/navigationTheme'

export default App = () => {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
      {/* <GestureHandlerRootView style={styles.container}>
        <ListingEditScreen />
      </GestureHandlerRootView> */}
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}) 