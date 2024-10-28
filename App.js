import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import WelcomeScreen from './app/screens/WelcomeScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

export default App = () => {

  return (

    <GestureHandlerRootView style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ListingEditScreen />
    </GestureHandlerRootView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}) 