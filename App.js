import React from "react"
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import WelcomeScreen from './app/screens/WelcomeScreen'
import MessagesScreen from "./app/screens/MessagesScreen"

export default function App() {

  return (
    // <WelcomeScreen />
    <GestureHandlerRootView style={styles.container}>
      <MessagesScreen />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})