import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  render() {
    let tip = '0.00',
      total = '0.00';
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * 0.20;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
      total = (parseFloat(tip) + parseFloat(this.state.inputValue)).toFixed(2);
    }

    return (
      <View style={styles.container}>
        <Text>
          Tip Amount: ${tip}
        </Text>
        <Text>
          Total: ${total}
        </Text>
        <TextInput 
          value={this.state.inputValue}
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          onChangeText={(text)=> this.setState({inputValue: text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
  }
});

