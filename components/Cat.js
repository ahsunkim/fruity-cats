import React from 'react';
import { Animated } from 'react-native';

export default function Cat(props) {
  let catStyle = {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    resizeMode: 'cover',
    // Allows you to animate horizontally
    transform: [
      {
        translateX: props.movePlayerVal,
      },
    ],
  };
  if (props.gameOver) {
    return (
      <Animated.Image
        source={require('../assets/hurtCat.png')}
        style={[
          catStyle,
          {
            height: 110,
            width: 150,
          },
        ]}
      />
    );
  }
  if (props.playerCaught) {
    return (
      <Animated.Image
        source={require('../assets/catCaught.png')}
        style={[
          catStyle,
          {
            height: 140,
            width: 80,
          },
        ]}
      />
    );
  } else if (props.playerSide === 'left' || props.playerSide === 'center') {
    return (
      <Animated.Image
        source={require('../assets/catLeft.png')}
        style={[
          catStyle,
          {
            height: 110,
            width: 80,
          },
        ]}
      />
    );
  } else if (props.playerSide === 'right') {
    return (
      <Animated.Image
        source={require('../assets/catRight.png')}
        style={[
          catStyle,
          {
            height: 110,
            width: 80,
          },
        ]}
      />
    );
  }
}
