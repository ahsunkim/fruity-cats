import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Cat extends Component {
  render() {
    if (this.props.gameOver) {
      return (
        <Animated.Image
          source={require('./hurtCat.png')}
          style={{
            position: 'absolute',
            zIndex: 1,
            height: 110,
            width: 150,
            bottom: 0,
            resizeMode: 'cover',
            transform: [
              {
                translateX: this.props.movePlayerVal,
              },
            ],
          }}
        />
      );
    }
    if (this.props.playerCaught) {
      return (
        <Animated.Image
          source={require('./catCaught.png')}
          style={{
            position: 'absolute',
            zIndex: 1,
            height: 140,
            width: 80,
            bottom: 0,
            resizeMode: 'cover',
            transform: [
              {
                translateX: this.props.movePlayerVal,
              },
            ],
          }}
        />
      );
    } else if (this.props.playerSide === 'left') {
      return (
        <Animated.Image
          source={require('./catLeft.png')}
          style={{
            position: 'absolute',
            zIndex: 1,
            height: 110,
            width: 80,
            bottom: 0,
            resizeMode: 'stretch',
            transform: [
              {
                translateX: this.props.movePlayerVal,
              },
            ],
          }}
        />
      );
    } else if (this.props.playerSide === 'right') {
      return (
        <Animated.Image
          source={require('./catRight.png')}
          style={{
            position: 'absolute',
            zIndex: 1,
            height: 110,
            width: 80,
            bottom: 0,
            resizeMode: 'cover',
            transform: [
              {
                translateX: this.props.movePlayerVal,
              },
            ],
          }}
        />
      );
    }
  }
}
