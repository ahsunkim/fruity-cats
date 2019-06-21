import React, { Component } from 'react';
import { Animated, Text } from 'react-native';

export default class SafeFruit extends Component {
  render() {
    if (this.props.safeFruit === 'Kiwis') {
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
    } else if (this.props.safeFruit === 'Pineapples') {
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
    } else if (this.props.safeFruit === 'Strawberries') {
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
    } else if (this.props.safeFruit === 'Watermelons') {
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
    } else if (this.props.safeFruit === 'Bananas') {
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
