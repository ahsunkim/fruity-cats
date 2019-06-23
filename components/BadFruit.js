import React from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';

function BadFruit(props) {
  let badFruitStyle = {
    position: 'absolute',
    // Allows you to set the fruit on certain places of the screen (left, right, center) based on x-coordinates
    left: props.badFruitStartposX,
    // Allows you to animate vertically
    transform: [{ translateY: props.moveBadFruitVal }],
  };
  if (props.badFruit === 'Lemons') {
    return (
      <Animated.Image
        source={require('../assets/lemon.png')}
        style={badFruitStyle}
      />
    );
  } else if (props.badFruit === 'Oranges') {
    return (
      <Animated.Image
        source={require('../assets/orange.png')}
        style={badFruitStyle}
      />
    );
  } else if (props.badFruit === 'Peaches') {
    return (
      <Animated.Image
        source={require('../assets/peach.png')}
        style={badFruitStyle}
      />
    );
  } else if (props.badFruit === 'Cherries') {
    return (
      <Animated.Image
        source={require('../assets/cherry.png')}
        style={badFruitStyle}
      />
    );
  } else if (props.badFruit === 'Apples') {
    return (
      <Animated.Image
        source={require('../assets/apple.png')}
        style={badFruitStyle}
      />
    );
  }
}

const mapStateToProps = state => ({
  badFruit: state.badFruit,
  badFruitStartposX: state.badFruitStartposX,
});

export default connect(mapStateToProps)(BadFruit);
