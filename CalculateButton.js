import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

  
   const calculate = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={props.onCalculate}
            title="Calcola passo"
            color= "#5453A0"
          />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
   flex: 3,
   justifyContent: 'center',
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

export default calculate;