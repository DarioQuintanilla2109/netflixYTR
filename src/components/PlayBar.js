import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

export default function PlayBar() {
  return (
    <Animatable.View animation={'bounceInRight'} style={styles.container}>
      <View style={styles.iconView}>
        <Icon name={'ios-add'} color={'white'} size={25} />
        <Text style={styles.textStyle}> My List</Text>
      </View>
      <View style={styles.buttonSyle}>
        <View style={styles.insideButton}>
          <Icon name={'ios-play'} color={'black'} size={25} />
          <Text style={{ fontWeight: 'bold' }}>Play</Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <Icon name={'ios-information'} color={'white'} size={25} />
        <Text style={styles.textStyle}>Info</Text>
      </View>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 4,
  },
  iconView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    marginTop: 3,
    fontWeight: 'bold',
  },
  buttonSyle: {
    backgroundColor: 'white',
    width: 85,
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
  },
  insideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
})
