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

export default function Data() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('Useless Text')

  useEffect(() => {
    fetch(
      'http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t=40+year+old+virgin'
    )
      .then(res => {
        if (res.ok) {
          return res
        }
      })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  // console.log(data)

  const getData = search => {
    console.log(search)
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t=home`)
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
      <TextInput style={styles.input} onChangeText={setSearch} value={search} />
      <Pressable style={styles.button} onPress={getData} />
      <Text> {data.Plot}</Text>
      <Image style={styles.Img} source={{ uri: data.Poster }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Img: {
    height: 140,
    width: 140,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 100,
  },
})
