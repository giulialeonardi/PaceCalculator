import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerTime extends Component {
    state = {unit: 'min'}
    updateUnit = (unit) => {
       this.setState({ unit: unit })
       this.props.onGetUnitTime(unit)
    }
    render() {
       return (
          <View style={{width:100}}>
             <Picker selectedValue = {this.state.unit} onValueChange = {this.updateUnit}>
                <Picker.Item label = "min" value = "min" />
                <Picker.Item label = "s" value = "s" />
             </Picker>
          </View>
       )
    }
 }
 export default PickerTime
