import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Cat extends Component {
  render() {
    if (this.props.playerSide === 'left') {
      return (
        <Animated.Image
          source={require('./miniCat.png')}
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
    } else {
      return (
        <Animated.Image
          source={require('./miniCat2.png')}
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
