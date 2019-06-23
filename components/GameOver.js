import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { updateHighScore } from '../app/reducers/reducer';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#5A4224',
  },
  messageBoard: {
    width: Dimensions.get('window').width - 50,
    resizeMode: 'contain',
    bottom: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#F8F3E7',
    elevation: 2,
    height: 45,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 5,
  },
  buttonText: {
    color: '#5A4224',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function GameOver(props) {
  if (props.gameOver && props.highScore < props.points) {
    props.updateHighScore();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/gameMessage.png')}
        style={styles.messageBoard}
      >
        <View style={styles.backgroundView}>
          <Text style={styles.text}>Oh no!</Text>
          <Text style={styles.text}>
            {props.badFruit} are poisonous to cats!
          </Text>
          <Text>You got {props.points} points</Text>
          <Text>Your high score is {props.highScore}</Text>
          <TouchableOpacity style={styles.button} onPress={props.startGame}>
            <Text style={styles.buttonText}>Click to Play Again!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = state => ({
  points: state.points,
  highScore: state.highScore,
  badFruit: state.badFruit,
  gameOver: state.gameOver,
});

const mapDispatchToProps = dispatch => ({
  updateHighScore: () => {
    dispatch(updateHighScore());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver);
