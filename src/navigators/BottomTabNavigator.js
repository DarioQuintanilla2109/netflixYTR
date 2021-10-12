import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import menu from '../screens/menu'
import fetch from '../screens/fetch'
import Icon from 'react-native-vector-icons/Ionicons'
import test from '../screens/test'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
        tabStyle: {
          paddingTop: 10,
        },
        activeTintColor: '#ffffff',
      }}
    >
      <Tab.Screen
        name='Home'
        component={menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='New and Hot'
        component={menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'ios-folder' : 'ios-folder-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Fast Laughs'
        component={menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'ios-happy' : 'ios-happy-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={fetch}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'ios-search' : 'ios-search-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Downloads'
        component={test}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'ios-download' : 'ios-download-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
