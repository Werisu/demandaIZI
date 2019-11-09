import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button } from 'react-native'

export default class App extends Component{

  render(){
    
    return (
      <View style={style.container}>
        <View>
        <Image source={require('./imgs/logoDemanda')}  style={{width: 150, height: 145}}/>
        </View>
        <View style={style.texto}>
        <Text style={style.f20}>Demanda IZI</Text>  
        </View>
        <View style={style.write}>
        <TextInput  placeholder=" E-mail" style={style.input}/>
        </View>
        <View>
        <TextInput placeholder=" Senha" style={style.input}/>
        </View>

        <View style={style.botao}>
          <Button style={style.dentrobotao} title="Logar" onPress ={() => alert("Apertado!")}/>
        </View>
        
        </View>
      
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  f20: {
    fontSize: 40,
    fontWeight: "bold"
  },
  texto: {
      marginTop: 30
  },
  input: {
    height: 35,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#EDE7FD",
    
  },
  write: {
   marginTop: 20,
    padding: 20
  },
  botao: {
    margin: 30,
  },

})