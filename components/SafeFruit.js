import React from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';

function SafeFruit(props) {
  let safeFruitStyle = {
    position: 'absolute',
    // Allows you to set the fruit on certain places of the screen (left, right, center) based on x-coordinates
    left: props.safeFruitStartposX,
    // Allows you to animate vertically
    transform: [{ translateY: props.moveSafeFruitVal }],
  };
  if (props.safeFruit === 'Kiwis') {
    return (
      <Animated.Image
        source={require('../assets/kiwi.png')}
        style={safeFruitStyle}
      />
    );
  } else if (props.safeFruit === 'Pineapples') {
    return (
      <Animated.Image
        source={require('../assets/pineapple.png')}
        style={safeFruitStyle}
      />
    );
  } else if (props.safeFruit === 'Strawberries') {
    return (
      <Animated.Image
        source={require('../assets/strawberry.png')}
        style={safeFruitStyle}
      />
    );
  } else if (props.safeFruit === 'Watermelons') {
    return (
      <Animated.Image
        source={require('../assets/watermelon.png')}
        style={safeFruitStyle}
      />
    );
  } else if (props.safeFruit === 'Bananas') {
    return (
      <Animated.Image
        source={require('../assets/banana.png')}
        style={safeFruitStyle}
      />
    );
  }
}

const mapStateToProps = state => ({
  safeFruit: state.animatedObject.safeFruit,
  safeFruitStartposX: state.animatedObject.safeFruitStartposX,
});

export default connect(mapStateToProps)(SafeFruit);
