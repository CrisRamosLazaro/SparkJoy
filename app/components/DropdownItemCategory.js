import { StyleSheet, TouchableOpacity, View } from 'react-native'
import TextBox from './TextBox'
import IconBox from './IconBox'

export default function DropdownItemCategory({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <IconBox
          icon={item.icon}
          bgColor={item.bgColor}
          size={70}
        />
        <TextBox style={styles.text}>{item.label}</TextBox>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    textAlign: "center"
  }
})