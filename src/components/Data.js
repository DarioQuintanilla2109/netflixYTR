import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Data() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(
      'http://www.omdbapi.com/?i=tt3896198&apikey=4a456566&?t=40+year+old+virgin'
    )
      .then(res => {
        if (res.ok) {
          return res
        }
      })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  console.log(data)
  return (
    <SafeAreaView style={styles.container}>
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
})
