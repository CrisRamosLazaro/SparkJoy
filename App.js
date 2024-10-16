import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ListingsScreen from "./app/screens/ListingsScreen"

export default function App() {

  return (
    // <WelcomeScreen />
    <GestureHandlerRootView style={styles.container}>
      <ListingsScreen />

    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})