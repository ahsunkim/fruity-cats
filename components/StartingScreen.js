import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class StartingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./gameMessage.png')}
          style={{
            width: 345,
            height: 229,
            bottom: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('./fruityCats.png')}
            style={{
              width: 280,
              height: 110,
              resizeMode: 'cover',
              marginBottom: 10,
            }}
          />
          <View style={{ backgroundColor: '#F6F1E5', marginTop: 10 }}>
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
