import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Data from '../components/Data'

export default function fetch() {
  return (
    <View style={styles.container}>
      <Data />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
