import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from '../components/Navbar'
import MainMessage from '../components/MainMessage'
import SubMessage from '../components/SubMessage'
import SignIn from '../components/SignIn'

export default function device() {
  return (
    <View style={styles.container}>
      <Navbar rightIcon={'About'} farRightIcon={'Privacy'} />
      <View style={styles.mainMessage}>
        <MainMessage text={'Watch on any device'} />
      </View>
      <View style={{ marginTop: 15 }}>
        <SubMessage
          text={
            'Stream on your phone, tablet, laptop, and TV without paying more'
          }
        />
      </View>
      <View style={styles.spacer}>
        <SignIn />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainMessage: {
    marginTop: '73%',
  },
  spacer: {
    marginTop: 40,
  },
})
