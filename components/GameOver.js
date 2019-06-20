import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default class GameOver extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./gameMessage.png')}
          style={{
            width: 250,
            height: 166,
            bottom: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.text}>Oh no!</Text>
          <Text style={styles.text}> This fruit is poisonous for cats!</Text>
          <Button onPress={this.props.startGame} title="Click to Play Again" />
        </ImageBackground>
      </View>
    );
  }
}
