import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class BadFruit extends Component {
  render() {
    let badFruitRandomizer = Math.floor(Math.random() * 5);
    if (badFruitRandomizer === 0) {
      return (
        <Animated.Image
          source={require('./lemon.png')}
          style={{
            position: 'absolute',
            left: this.props.badFruitStartposX,
            transform: [{ translateY: this.props.moveBadFruitVal }],
          }}
        />
      );
    } else if (badFruitRandomizer === 1) {
      return (
        <Animated.Image
          source={require('./orange.png')}
          style={{
            position: 'absolute',
            left: this.props.badFruitStartposX,
            transform: [{ translateY: this.props.moveBadFruitVal }],
          }}
        />
      );
    } else if (badFruitRandomizer === 2) {
      return (
        <Animated.Image
          source={require('./peach.png')}
          style={{
            position: 'absolute',
            left: this.props.badFruitStartposX,
            transform: [{ translateY: this.props.moveBadFruitVal }],
          }}
        />
      );
    } else if (badFruitRandomizer === 3) {
      return (
        <Animated.Image
          source={require('./cherry.png')}
          style={{
            position: 'absolute',
            left: this.props.badFruitStartposX,
            transform: [{ translateY: this.props.moveBadFruitVal }],
          }}
        />
      );
    } else if (badFruitRandomizer === 4) {
      return (
        <Animated.Image
          source={require('./apple.png')}
          style={{
            position: 'absolute',
            left: this.props.badFruitStartposX,
            transform: [{ translateY: this.props.moveBadFruitVal }],
          }}
        />
      );
    }
  }
}
