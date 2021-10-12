import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default function Info() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(res => {
        if (res.ok) {
          return res
        }
      })
      .then(res => res.json())
      .then(info => setInfo(info))
  }, [])
  console.log(info)
  return (
    <SafeAreaView>
      <Text>upd</Text>
    </SafeAreaView>
  )
}
