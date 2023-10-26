import {Button, View, Text, StyleSheet} from "react-native";
import React, {Component} from "react/cjs/react.production.min";

class TouchableOpacity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            text: "ukryj"
        };
    }

    toggling = () => {
        this.setState({isVisible: !this.state.isVisible});
        if (this.state.isVisible === true) {
            this.setState({text: "pokaz"})
        } else {
            this.setState({text: "ukryj"})
        }
        console.log(this.state.isVisible);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Zadanie2</Text>
                <Button
                    onPress={this.toggling}
                    title={this.state.text}
                ></Button>
                {this.state.isVisible && (
                    <View style={styles.hiddenContent}>
                        <Text >Nazywam się </Text>
                        <Text>Piotr Dawid </Text>
                    </View>
                )}
            </View>
        );
    }
}

export default TouchableOpacity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        margin: 8,
        fontSize: 30,
    },
    hiddenContent: {
        marginTop: 20,
    }
});