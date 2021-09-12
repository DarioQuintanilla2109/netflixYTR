import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SubMessage(props) {
  return (
    <View>
      <Text style={styles.SubMessageStyle}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  SubMessageStyle: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 21.5,
  },
})
