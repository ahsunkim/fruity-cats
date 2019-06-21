import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class SafeFruit extends Component {
  render() {
    let safeFruitStyle = {
      position: 'absolute',
      left: this.props.safeFruitStartposX,
      transform: [{ translateY: this.props.moveSafeFruitVal }],
    };
    if (this.props.safeFruit === 'Kiwis') {
      return (
        <Animated.Image source={require('./assets/kiwi.png')} style={safeFruitStyle} />
      );
    } else if (this.props.safeFruit === 'Pineapples') {
      return (
        <Animated.Image
          source={require('./assets/pineapple.png')}
          style={safeFruitStyle}
        />
      );
    } else if (this.props.safeFruit === 'Strawberries') {
      return (
        <Animated.Image
          source={require('./assets/strawberry.png')}
          style={safeFruitStyle}
        />
      );
    } else if (this.props.safeFruit === 'Watermelons') {
      return (
        <Animated.Image
          source={require('./assets/watermelon.png')}
          style={safeFruitStyle}
        />
      );
    } else if (this.props.safeFruit === 'Bananas') {
      return (
        <Animated.Image
          source={require('./assets/banana.png')}
          style={safeFruitStyle}
        />
      );
    }
  }
}
