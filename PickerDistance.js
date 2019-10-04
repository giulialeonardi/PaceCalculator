import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerDistance extends Component {
   state = {unit: 'km'}

   updateUnit = (unit) => {
      this.setState({ unit: unit })
      this.props.onGetUnitDistance(unit)
   }
   
   render() {
      return (
         <View style={{width:100}}>
            <Picker 
            style={{color: 'white'}}
            selectedValue = {this.state.unit} 
            onValueChange = {this.updateUnit} 
            itemStyle={{backgroundColor: 'gray', color: 'white'}}>
               <Picker.Item label = "km" value = "km" />
               <Picker.Item label = "m" value = "m" />
            </Picker>
         </View>
      )
   }
}
export default PickerDistance

