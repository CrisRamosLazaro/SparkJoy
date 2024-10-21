import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

export default function App() {

  return (
    // <WelcomeScreen /> 
    // <GestureHandlerRootView style={styles.container}>
    <ListingEditScreen />

    // </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})