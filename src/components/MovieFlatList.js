import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { MOVIE_DATA } from '../../assets/MOVIE_DATA'

export default function MovieFlatList() {
  const renderMovies = ({ item, index }) => {
    return (
      <Image
        source={item}
        style={{
          width: 100,
          height: 130,
          resizeMode: 'contain',
          margin: 8,
          borderRadius: 3,
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={MOVIE_DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderMovies}
        keyExtractor={item => item.toString()}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
})
