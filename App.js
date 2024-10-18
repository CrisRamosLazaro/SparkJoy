import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Screen from './app/components/Screen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import CustomTextInput from './app/components/CustomTextInput'
import CustomPicker from './app/components/CustomPicker'


const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]
export default function App() {

  const [firstName, setFirstName] = useState('')
  const [category, setCategory] = useState()

  return (
    // <WelcomeScreen />
    <GestureHandlerRootView style={styles.container}>
      <Screen>
        <CustomPicker
          icon="apps"
          items={categories}
          placeholder="Category"
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
        />
        <CustomTextInput
          placeholder="Username"
          icon="email"
        />
        {/* <TextInput
          onChangeText={text => setFirstName(text)}
          placeholder="First Name"
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1
          }}
        /> */}
      </Screen>

    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})