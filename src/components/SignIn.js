import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'

export default function SignIn({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('bottomTabNav')}
    >
      <Text style={styles.buttonText}>SIGN IN</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    marginTop: Platform.OS === 'ios' ? '60%' : '40%',
    height: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    backgroundColor: '#e50914',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})
