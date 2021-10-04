import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Data() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('Search')
  let APIKEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t='
  let userSearch = search

  console.log(userSearch)
  useEffect(() => {
    fetch()
      .then(res => {
        if (res.ok) {
          // console.log(res.headers)
          return res
        }
      })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  // console.log(data)

  const getData = search => {
    fetch(APIKEY + userSearch)
      .then(res => {
        if (res.ok) {
          return res
        }
      })
      .then(res => res.json())
      .then(data => setData(data))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Icon
          style={styles.searchIcon}
          name={'ios-search'}
          color={'white'}
          size={25}
        />
        <TextInput
          clearTextOnFocus={true}
          selectionColor={'red'}
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          textAlign={'center'}
          placeHolder={'Search2'}
        />
      </View>
      <Pressable style={styles.button} onPress={getData} />
      <Text> {data.Plot}</Text>
      <Image style={styles.Img} source={{ uri: data.Poster }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchIcon: {},
  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  Img: {
    height: 140,
    width: 140,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'gray',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 100,
  },
})
