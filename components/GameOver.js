import React from 'react';
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

export default function GameOver(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/gameMessage.png')}
        style={styles.messageBoard}
      >
        <View style={styles.textBackgroundView}>
          <Text style={styles.text}>Oh no!</Text>
          <Text style={styles.text}>
            {props.badFruit} are poisonous to cats!
          </Text>
          <Button
            color="#5A4224"
            onPress={props.startGame}
            title="Click to Play Again"
          />
        </View>
      </ImageBackground>
    </View>
  );
}
