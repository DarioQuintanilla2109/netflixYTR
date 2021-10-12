import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Info from '../components/Info'

export default function test() {
  return (
    <SafeAreaView style={styles.container}>
      <Info />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
