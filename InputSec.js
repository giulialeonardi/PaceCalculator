import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class InputSec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleChangeText = (value) => {
        this.setState({
            text: value
        })
    }
    
    render(){
        return(
            <TextInput
            style={styles.inputBox}
            placeholder = "Secondi"
            onChangeText= {(value) => this.props.onGetTime(value)}
            keyboardType= "numeric"
            >
            </TextInput>
        );
    }
}

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: "white",
        flex: 3,
        borderRadius: 15,
      },
    })