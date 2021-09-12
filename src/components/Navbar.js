import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Navbar(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ marginLeft: 15 }}>
          <Image
            source={require('../../assets/netflix.png')}
            style={{ width: 100, height: 60, borderRadius: 100 }}
          />
        </View>
        <View style={styles.alignRight}>
          <Text style={styles.textStyle}> {props.rightIcon} </Text>
        </View>
        <View>
          <Text style={styles.textStyle}> {props.farRightIcon} </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  alignRight: {
    marginLeft: 'auto',
  },
  textStyle: {
    color: 'white',
    marginTop: 22,
    marginRight: 20,
    fontWeight: 'bold',
  },
})
