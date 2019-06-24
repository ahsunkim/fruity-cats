import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';

function Cat(props) {
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
  if (props.catPlayer === 'Berry') {
    if (props.gameOver) {
      return (
        <Animated.Image
          source={require('../assets/berryHurt.png')}
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
          source={require('../assets/berryCaught.png')}
          style={[
            catStyle,
            {
              height: 140,
              width: 80,
            },
          ]}
        />
      );
    } else if (props.playerPosX < Dimensions.get('window').width / 2) {
      return (
        <Animated.Image
          source={require('../assets/berryLeft.png')}
          style={[
            catStyle,
            {
              height: 120,
              width: 80,
            },
          ]}
        />
      );
    } else if (props.playerPosX >= Dimensions.get('window').width / 2) {
      return (
        <Animated.Image
          source={require('../assets/berryRight.png')}
          style={[
            catStyle,
            {
              height: 120,
              width: 80,
            },
          ]}
        />
      );
    }
  } else {
    if (props.gameOver) {
      return (
        <Animated.Image
          source={require('../assets/citrusHurt.png')}
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
          source={require('../assets/citrusCaught.png')}
          style={[
            catStyle,
            {
              height: 140,
              width: 80,
            },
          ]}
        />
      );
    } else if (props.playerPosX < Dimensions.get('window').width/2) {
      return (
        <Animated.Image
          source={require('../assets/citrusLeft.png')}
          style={[
            catStyle,
            {
              height: 120,
              width: 80,
            },
          ]}
        />
      );
    } else if (props.playerPosX >= Dimensions.get('window').width/2) {
      return (
        <Animated.Image
          source={require('../assets/citrusRight.png')}
          style={[
            catStyle,
            {
              height: 120,
              width: 80,
            },
          ]}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  playerCaught: state.gameLogic.playerCaught,
  playerPosX: state.animatedObject.playerPosX,
  gameOver: state.gameLogic.gameOver,
  catPlayer: state.animatedObject.catPlayer,
});

export default connect(mapStateToProps)(Cat);
