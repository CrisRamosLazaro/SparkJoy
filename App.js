import { StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/routes/AuthNavigator'
import LoggedNavigator from './app/routes/LoggedNavigator'
import navigationTheme from './app/routes/navigationTheme'

export default App = () => {

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <LoggedNavigator />

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}) 