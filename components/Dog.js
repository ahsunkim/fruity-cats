import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Dog extends Component {
  render() {
    return (
      <Animated.Image
        source={require('./dog.png')}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          resizeMode: 'stretch',
          left: this.props.dogStartposX,
          transform: [{ translateY: this.props.moveDogVal }],
        }}
      />
    );
  }
}
