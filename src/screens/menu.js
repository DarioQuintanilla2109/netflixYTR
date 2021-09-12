import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native'
import Navbar from '../components/Navbar'
import Icon from 'react-native-vector-icons/Ionicons'
import SubMessage from '../components/SubMessage'
import { SafeAreaView } from 'react-native-safe-area-context'
import movieDisplay from '../../assets/movieDisplay.jpg'
import SubNavBar from '../components/SubNavBar'
import MainMessage from '../components/MainMessage'
import PlayBar from '../components/PlayBar'
import MovieFlatList from '../components/MovieFlatList'

export default function menu(props) {
  return (
    <SafeAreaView syle={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={movieDisplay}
          style={styles.image}
          resizeMode='cover'
          imageStyle={{ opacity: 0.8 }}
        >
          <Navbar
            rightIcon={<Icon name='ios-albums' size={25} />}
            farRightIcon={<Icon name='ios-square' color='purple' size={25} />}
          />
          <SubNavBar />
          <View style={styles.messageSpacer}>
            <MainMessage text={'Turning Point'} />
          </View>
          <SubMessage text={'# 2 in the world'} />
        </ImageBackground>
        <PlayBar />
        <View>
          <Text style={styles.flatListTxt}>New Releases</Text>
        </View>
        <View>
          <MovieFlatList />
        </View>
        <View>
          <Text style={styles.flatListTxt}>Trending Now</Text>
        </View>
        <View>
          <MovieFlatList />
        </View>
        <View>
          <Text style={styles.flatListTxt}>Continue Watching</Text>
        </View>
        <View>
          <MovieFlatList />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  image: { height: 480 },
  messageSpacer: {
    marginTop: 300,
  },
  flatListTxt: {
    color: 'white',
    marginTop: 8,
    marginLeft: 2,
    fontWeight: 'bold',
  },
})
