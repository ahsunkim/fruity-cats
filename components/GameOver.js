import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#5A4224',
  },
  messageBoard: {
    width: 345,
    height: 229,
    bottom: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBackgroundView: {
    backgroundColor: '#F6F1E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class GameOver extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/gameMessage.png')}
          style={styles.messageBoard}
        >
          <View style={styles.textBackgroundView}>
            <Text style={styles.text}>Oh no!</Text>
            <Text style={styles.text}>
              {this.props.badFruit} are poisonous for cats!
            </Text>
            <Button
              color="#5A4224"
              onPress={this.props.startGame}
              title="Click to Play Again"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
