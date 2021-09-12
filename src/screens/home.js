import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Navbar from '../components/Navbar'
import display from '../../assets/display.jpg'
import MainMessage from '../components/MainMessage'
import SubMessage from '../components/SubMessage'
import SignIn from '../components/SignIn'
import Swiper from 'react-native-swiper'
import Device from '../screens/device'
import Countdown from '../screens/countdown'

export default function home({ navigation }) {
  return (
    <Swiper
      loop={false}
      activeDotColor='red'
      dotColor='gray'
      showsPagination={true}
      paginationStyle={{
        position: 'absolute',
        top: '77%',
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={display}
          rezizeMode='cover'
          imageStyle={{ opacity: 0.8 }}
        >
          <Navbar rightIcon={'About'} farRightIcon={'Privacy'} />
          <View style={{ marginTop: '73%' }}>
            <MainMessage text={'Trying to join Netflix?'} />
          </View>
          <View style={{ marginTop: 10 }}>
            <SubMessage
              text={` You can sign up for Netflix in the \napp. We know its a hassle. After\n youre a member, you can start\n watching in the app.`}
            />
          </View>
          <View>
            <SignIn navigation={navigation} />
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1 }}>
        <Device />
      </View>
      <View style={{ flex: 1 }}>
        <Countdown />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { flex: 1 },
})
