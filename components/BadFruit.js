import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class BadFruit extends Component {
  render() {
    let badFruitStyle = {
      position: 'absolute',
      left: this.props.badFruitStartposX,
      transform: [{ translateY: this.props.moveBadFruitVal }],
    };
    if (this.props.badFruit === 'Lemons') {
      return (
        <Animated.Image
          source={require('./assets/lemon.png')}
          style={badFruitStyle}
        />
      );
    } else if (this.props.badFruit === 'Oranges') {
      return (
        <Animated.Image
          source={require('./assets/orange.png')}
          style={badFruitStyle}
        />
      );
    } else if (this.props.badFruit === 'Peaches') {
      return (
        <Animated.Image
          source={require('./assets/peach.png')}
          style={badFruitStyle}
        />
      );
    } else if (this.props.badFruit === 'Cherries') {
      return (
        <Animated.Image
          source={require('./assets/cherry.png')}
          style={badFruitStyle}
        />
      );
    } else if (this.props.badFruit === 'Apples') {
      return (
        <Animated.Image
          source={require('./assets/apple.png')}
          style={badFruitStyle}
        />
      );
    }
  }
}
