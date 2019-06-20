import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class BadFruit extends Component {
  render() {
    if (this.props.badFruit === 'lemon') {
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
    } else if (this.props.badFruit === 'orange') {
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
    } else if (this.props.badFruit === 'peach') {
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
    } else if (this.props.badFruit === 'cherry') {
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
    } else if (this.props.badFruit === 'apple') {
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
