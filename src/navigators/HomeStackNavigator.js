import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import bottomTabNav from '../navigators/BottomTabNavigator'
import home from '../screens/home'

const HomeStack = createStackNavigator()

function HomeStackNavigator(props) {
  return (
    <HomeStack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name='home' component={home} />
      <HomeStack.Screen name='bottomTabNav' component={bottomTabNav} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
