import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Cat extends Component {
  render() {
    let catStyle = {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      resizeMode: 'cover',
      // Allows you to animate horizontally
      transform: [
        {
          translateX: this.props.movePlayerVal,
        },
      ],
    };
    if (this.props.gameOver) {
      return (
        <Animated.Image
          source={require('../assets/hurtCat.png')}
          style={[
            catStyle,
            {
              height: 110,
              width: 150,
            },
          ]}
        />
      );
    }
    if (this.props.playerCaught) {
      return (
        <Animated.Image
          source={require('../assets/catCaught.png')}
          style={[
            catStyle,
            {
              height: 140,
              width: 80,
            },
          ]}
        />
      );
    } else if (
      this.props.playerSide === 'left' ||
      this.props.playerSide === 'center'
    ) {
      return (
        <Animated.Image
          source={require('../assets/catLeft.png')}
          style={[
            catStyle,
            {
              height: 110,
              width: 80,
            },
          ]}
        />
      );
    } else if (this.props.playerSide === 'right') {
      return (
        <Animated.Image
          source={require('../assets/catRight.png')}
          style={[
            catStyle,
            {
              height: 110,
              width: 80,
            },
          ]}
        />
      );
    }
  }
}
