/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import CalculateButton from './CalculateButton';
import PickerDistance from './PickerDistance';
import InputDistance from './InputDistance';
import InputMin from './InputMin';
import InputSec from './InputSec';


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      minutesInput: '',
      secondsInput:'', 
      distanceInput: '',
      distanceUnit: 'km',
    }
    
 }
  getUserGesture = () => {
    console.log("pressed");
    var time = 0
    var distance = 0
    if((this.state.minutesInput != "" || this.state.secondsInput != "") && this.state.distanceInput != ""){
      if(this.state.minutesInput != ""){  
          time= this.state.minutesInput*60
          console.log("Minuti: "+time)
      }
      if(this.state.secondsInput != ""){
          time = Number(time) + Number(this.state.secondsInput)
          console.log("Minuti + secondi: "+time)

      }
      if(this.state.distanceUnit == "m"){
          distance = this.state.distanceInput/1000
      }else{  
          distance = this.state.distanceInput
      }
      console.log("time: "+time)
      console.log("distance: "+distance)

      const x = time/distance
      console.log("x: "+x)
      const y = x/60
      const decimal = y - Math.floor(y)
      console.log("decimal: "+decimal)
      var k = decimal * 60
      var result = Math.floor(y) + ":" + Math.floor(k)
      alert("Il passo è "+result)
    }else{
      alert("Inserire distanza e tempo")
    }
  }

  getDistance = (distance) => {
    console.log("Distanza inserita");
    if(distance.includes(",") || distance.includes(".") || distance.includes("-") || distance.includes (" ")){
      alert("Carattere non valido")
    }else{
      this.setState({
        distanceInput:distance
      })
    }
  }

  getMinutes = (time) => {
    console.log("Tempo inserito");
    if(time.includes(",") || time.includes(".") || time.includes("-") || time.includes (" ")){
      alert("Carattere non valido")
    }else{
      this.setState({
        minutesInput:time
      })
    }
  }

  getSeconds = (time) => {
    console.log("Tempo inserito");
    if(time.includes(",") || time.includes(".") || time.includes("-") || time.includes (" ")){
      alert("Carattere non valido")
    }else{
      this.setState({
        secondsInput:time
      })
    }
  }
  

  getUnitDistance = (unit) => {
    this.setState({
      distanceUnit:unit
    })
  }

  getUnitTime = (unit) => {
    this.setState({
      timeUnit:unit
    })
  }

 render() {
   return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <SafeAreaView style={{flex:1, flexDirection: 'column', backgroundColor:"#000"}}>
      <View style={{flex:4}}>
      <Image
        style={{flex:1, height: undefined, width: undefined}}
        source={require('./images/berlin.jpeg')}
        resizeMode = "cover"
        />
      </View>
      <View style={{flex:1}}></View>
      <View style={styles.container}>
          <Text style={styles.text}>DISTANZA</Text>
          <InputDistance onGetDistance={this.getDistance}></InputDistance>
          <PickerDistance style={styles.picker} onGetUnitDistance={this.getUnitDistance}></PickerDistance>
      </View>
      <View style={styles.container}>
          <Text style={styles.text}>TEMPO</Text>
          <InputMin onGetTime={this.getMinutes}></InputMin>
          <Text style={{color: 'white', padding: 10}}>:</Text>
          <InputSec onGetTime={this.getSeconds}></InputSec>
      </View>  
      <CalculateButton onCalculate={this.getUserGesture}></CalculateButton>
      </SafeAreaView>
    </>
  );
};


}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding:20
  },
  text:{
    color:"#fff",
    flex: 3,
    fontWeight: "bold",
    fontSize:15,
    padding:10
  },
  inputBox:{
    backgroundColor: "white",
    flex: 3
  },
  picker:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor:'red',
    padding:10
  },
   buttonContainer: {
     margin: 20
   },
   alternativeLayoutButtonContainer: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   }
});


