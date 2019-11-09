import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default class App extends Component{
  render(){
    return (
      <View style={style.container}>
        <Text style={style.f20}>Demanda IZI</Text>
        
      </View>
    )
  }
}
// style
const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  f20: {
    fontSize: 20
  }

})