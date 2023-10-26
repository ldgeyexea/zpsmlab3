import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleButtonPress = value => {
    this.setState(prevState => ({
      input: prevState.input + value,
    }));
  };

  handleDelete = () => {
    this.setState(prevState => ({
      input: prevState.input.slice(0, -1)
    }));
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.input);
      this.setState({
        input: result.toString()
      });
    } catch (error) {
      this.setState({
        input: 'Error'
      });
    }
  };

  clearInput = () => {
    this.setState({
      input: '',
    });
  };

  render() {
    const buttons = [
      'AC', '‌‌ ' , '‌‌ ', '*',
      '7', '8', '9', '/',
      '4', '5', '6', '+',
      '1', '2', '3', '-',
      '0', '', ',', '=',
    ];

    return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.input}>{this.state.input}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            {buttons.map((button, index) => {
              const isNumber = !isNaN(parseFloat(button)) || button === '.';
              return (
                  <TouchableOpacity
                      key={index}
                      style={[
                        styles.button,

                        (isNumber|| button==''||button==',') ? styles.numberButton : styles.operationButton
                      ]}
                      onPress={() => {
                        if (button === '=') {
                          this.calculateResult();
                        } else if (button === 'AC') {
                          this.clearInput();
                        } else if (button === 'DEL') {
                          this.handleDelete();
                        } else {
                          this.handleButtonPress(button);
                        }
                      }}
                  >
                    <Text style={styles.buttonText}>{button}</Text>
                  </TouchableOpacity>
              );
            })}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#535250',
    padding: 50,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 40,
    color:"orange"
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0 ,
  },
  numberButton: {
    backgroundColor: '#626262', // Kolor przycisków z liczbami
  },
  operationButton: {
    backgroundColor: '#ffa956', // Kolor przycisków z operacjami
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff',
  },

});