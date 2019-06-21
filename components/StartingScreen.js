import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBoard: {
    width: 345,
    height: 229,
    bottom: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 110,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  buttonView: { backgroundColor: '#F6F1E5', marginTop: 10 },
});

export default class StartingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/gameMessage.png')}
          style={styles.messageBoard}
        >
          <Image
            source={require('../assets/fruityCats.png')}
            style={styles.logo}
          />
          <View style={styles.buttonView}>
            <Button
              color="#5A4224"
              onPress={this.props.startGame}
              title="Click to Play"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
