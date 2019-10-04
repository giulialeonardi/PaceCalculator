import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default class InputDistance extends Component {
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
            placeholder = "Distanza"
            onChangeText= {(value) => this.props.onGetDistance(value)}
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