import React, { Component } from 'react';
import { Animated, Text } from 'react-native';

export default class SafeFruit extends Component {
  render() {
    if (this.props.safeFruit === 'kiwi') {
      return (
        <Animated.Image
          source={require('./kiwi.png')}
          style={{
            position: 'absolute',
            left: this.props.safeFruitStartposX,
            transform: [{ translateY: this.props.moveSafeFruitVal }],
          }}
        />
      );
    } else if (this.props.safeFruit === 'pineapple') {
      return (
        <Animated.Image
          source={require('./pineapple.png')}
          style={{
            position: 'absolute',
            left: this.props.safeFruitStartposX,
            transform: [{ translateY: this.props.moveSafeFruitVal }],
          }}
        />
      );
    } else if (this.props.safeFruit === 'strawberry') {
      return (
        <Animated.Image
          source={require('./strawberry.png')}
          style={{
            position: 'absolute',
            left: this.props.safeFruitStartposX,
            transform: [{ translateY: this.props.moveSafeFruitVal }],
          }}
        />
      );
    } else if (this.props.safeFruit === 'watermelon') {
      return (
        <Animated.Image
          source={require('./watermelon.png')}
          style={{
            position: 'absolute',
            left: this.props.safeFruitStartposX,
            transform: [{ translateY: this.props.moveSafeFruitVal }],
          }}
        />
      );
    } else if (this.props.safeFruit === 'banana') {
      return (
        <Animated.Image
          source={require('./banana.png')}
          style={{
            position: 'absolute',
            left: this.props.safeFruitStartposX,
            transform: [{ translateY: this.props.moveSafeFruitVal }],
          }}
        />
      );
    }
  }
}
