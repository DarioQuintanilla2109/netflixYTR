import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function SubNavBar() {
  return (
    <Animatable.View animation={'bounceInRight'} style={styles.container}>
      <View>
        <Text style={styles.textStyle}>TV Shows</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Movies</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Categories</Text>
      </View>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: 'white',
    marginTop: 12,
    fontWeight: 'bold',
  },
})
