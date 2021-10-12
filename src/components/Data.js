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

  //console.log(userSearch)

  useEffect(() => {
    fetch(APIKEY + 'The Guilty')
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

  console.log(data)
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
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.titleText}>New Release</Text>
        <View style={styles.movieDisplay}>
          <View
            style={{
              flex: 2,
            }}
          >
            <Image
              style={{ height: 120, borderRadius: 10 }}
              source={{ uri: data.Poster }}
              resizeMode='contain'
            />
          </View>

          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginRight: '50%',
                marginTop: '10%',
                fontSize: 18,
              }}
            >
              {data.Title}
            </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'black', marginRight: 20 }}>
            <Icon
              style={{
                color: 'white',
                marginTop: '50%',
              }}
              name={'ios-play'}
              size={45}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
// <Image style={styles.Img} source={{ uri: data.Poster }} />
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
  movieDisplay: {
    flexDirection: 'row',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
  movieBox: {
    width: 120,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'white',
  },
})
