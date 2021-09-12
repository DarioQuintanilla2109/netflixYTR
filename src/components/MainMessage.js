import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function MainMessage(props) {
  return (
    <View>
      <Animatable.Text
        animation='pulse'
        iterationCount={'infinite'}
        style={styles.mainMessageStyle}
      >
        {props.text}
      </Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainMessageStyle: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.1,
    marginHorizontal: 25,
  },
})
