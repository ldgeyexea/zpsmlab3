import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Calc extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            result: '0',
        };
    }

    handleButtonPress = (value) => {
        if (value === '=') {
            try {
                const result = eval(this.state.input);
                this.setState({ result: result.toString() });
            } catch (error) {
                this.setState({ result: 'Error' });
            }
        } else if (value === 'C') {
            this.setState({ input: '', result: '0' });
        } else {
            this.setState((prevState) => ({ input: prevState.input + value }));
        }
    };

    render() {
        const buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', 'C', '=', '+',
        ];

        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.result}</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>{this.state.input}</Text>
                </View>
                <View style={styles.buttons}>
                    {buttons.map((buttonValue) => (
                        <TouchableOpacity
                            key={buttonValue}
                            style={styles.button}
                            onPress={() => this.handleButtonPress(buttonValue)}
                        >
                            <Text style={styles.buttonText}>{buttonValue}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    result: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'white',
    },
    resultText: {
        fontSize: 30,
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'white',
    },
    inputText: {
        fontSize: 24,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 24,
    },
});

export default Calc;