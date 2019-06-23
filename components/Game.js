import React, { Component } from 'react';
import Cat from './Cat';
import Controls from './Controls';
import Counter from './Counter';
import GameOver from './GameOver';
import StartingScreen from './StartingScreen';
import BadFruit from './BadFruit';
import SafeFruit from './SafeFruit';
import { Audio } from 'expo-av';
import { connect } from 'react-redux';
import {
  gainPointBadFruit,
  gainPointGoodFruit,
  toggledOffGainPoint,
  startGame,
  setSafeFruit,
  setBadFruit,
  setPlayerSide,
  updateHighScore,
  endGame,
  increaseFruitSpeed,
} from '../app/reducers/reducer';

import {
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover',
  },
});

class Game extends Component {
  constructor() {
    super();
    this.state = {
      // creating the cat player
      movePlayerVal: new Animated.Value(40),

      // creating the poisonous fruits
      moveBadFruitVal: new Animated.Value(-100),

      // creating the safe fruits
      moveSafeFruitVal: new Animated.Value(-100),
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.animateBadFruit = this.animateBadFruit.bind(this);
    this.animateSafeFruit = this.animateSafeFruit.bind(this);
    this.animateRandomFruit = this.animateRandomFruit.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  componentDidMount() {
    this.playSong();
  }
  async playSong() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../assets/catMusic.mp3'));
      soundObject.setIsLoopingAsync(true);
      soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }
  async startGame() {
    await this.props.startGame();
    this.animateRandomFruit();
  }
  animateRandomFruit() {
    const badOrSafeRandomizer = Math.floor(Math.random() * 2);
    const safeFruitArr = [
      'Kiwis',
      'Pineapples',
      'Strawberries',
      'Watermelons',
      'Bananas',
    ];
    const badFruitArr = ['Lemons', 'Oranges', 'Peaches', 'Cherries', 'Apples'];
    const fruitRandomizer = Math.floor(Math.random() * 5);
    if (badOrSafeRandomizer) {
      this.animateBadFruit(badFruitArr[fruitRandomizer]);
    } else {
      this.animateSafeFruit(safeFruitArr[fruitRandomizer]);
    }
  }
  async animateSafeFruit(fruit) {
    this.state.moveSafeFruitVal.setValue(-100);
    const windowH = Dimensions.get('window').height;
    let randomizer = Math.floor(Math.random() * 3);
    let direction = '';
    if (randomizer === 2) {
      randomizer = 40;
      direction = 'left';
    } else if (randomizer === 1) {
      randomizer = Dimensions.get('window').width / 2 - 40;
      direction = 'center';
    } else if (randomizer === 0) {
      randomizer = Dimensions.get('window').width - 120;
      direction = 'right';
    }
    await this.props.setSafeFruit(fruit, direction, randomizer);
    let refreshIntervalId = setInterval(async () => {
      if (
        this.state.moveSafeFruitVal._value > windowH - 200 &&
        this.state.moveSafeFruitVal._value < windowH - 100 &&
        this.props.playerSide === this.props.safeFruitSide &&
        !this.props.gainedPoint
      ) {
        await this.props.gainPointGoodFruit();
      }
    }, 50);
    setInterval(() => {
      this.props.increaseFruitSpeed();
    }, 20000);
    Animated.timing(this.state.moveSafeFruitVal, {
      toValue: Dimensions.get('window').height,
      duration: this.props.fruitSpeed,
    }).start(event => {
      if (event.finished || this.props.gameOver) {
        clearInterval(refreshIntervalId);
      }
      if (this.props.gameOver === false) {
        this.props.toggledOffGainPoint();
        this.animateRandomFruit();
      }
    });
  }
  async animateBadFruit(fruit) {
    this.state.moveBadFruitVal.setValue(-100);
    const windowH = Dimensions.get('window').height;
    let randomizer = Math.floor(Math.random() * 3);
    let direction = '';
    if (randomizer === 2) {
      randomizer = 40;
      direction = 'left';
    } else if (randomizer === 1) {
      randomizer = Dimensions.get('window').width / 2 - 40;
      direction = 'center';
    } else if (randomizer === 0) {
      randomizer = Dimensions.get('window').width - 120;
      direction = 'right';
    }
    await this.props.setBadFruit(fruit, direction, randomizer);
    let refreshIntervalId = setInterval(() => {
      if (
        this.state.moveBadFruitVal._value > windowH - 200 &&
        this.state.moveBadFruitVal._value < windowH - 100 &&
        this.props.playerSide === this.props.badFruitSide
      ) {
        this.props.endGame();
      } else if (
        this.state.moveBadFruitVal._value > windowH - 200 &&
        this.state.moveBadFruitVal._value < windowH - 100 &&
        this.props.playerSide !== this.props.badFruitSide &&
        !this.props.gainedPoint
      ) {
        this.props.gainPointBadFruit();
      }
    }, 50);
    setInterval(() => {
      this.props.increaseFruitSpeed();
    }, 20000);
    Animated.timing(this.state.moveBadFruitVal, {
      toValue: Dimensions.get('window').height,
      duration: this.props.fruitSpeed,
    }).start(async event => {
      if (event.finished || this.props.gameOver) {
        clearInterval(refreshIntervalId);
      }
      if (this.props.gameOver === false) {
        await this.props.toggledOffGainPoint();
        this.animateRandomFruit();
      } else {
        this.updateHighScore();
      }
    });
  }
  async movePlayer(direction) {
    if (direction === 'right') {
      await this.props.setPlayerSide('right');
      Animated.spring(this.state.movePlayerVal, {
        toValue: Dimensions.get('window').width - 120,
        tension: 100,
      }).start();
    } else if (direction === 'left') {
      await this.props.setPlayerSide('left');
      Animated.spring(this.state.movePlayerVal, {
        toValue: 40,
        tension: 100,
      }).start();
    } else if (direction === 'center') {
      await this.props.setPlayerSide('center');
      Animated.spring(this.state.movePlayerVal, {
        toValue: Dimensions.get('window').width / 2 - 40,
        tension: 100,
      }).start();
    }
  }
  updateHighScore() {
    if (this.props.highScore < this.props.points) {
      this.props.updateHighScore();
    }
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/jungle.jpg')}
        style={styles.container}
      >
        <Counter />
        {this.props.startMode && <StartingScreen startGame={this.startGame} />}
        {this.props.gameOver && <GameOver startGame={this.startGame} />}
        <Cat movePlayerVal={this.state.movePlayerVal} />
        <SafeFruit moveSafeFruitVal={this.state.moveSafeFruitVal} />
        <BadFruit moveBadFruitVal={this.state.moveBadFruitVal} />
        <Controls movePlayer={this.movePlayer} />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  points: state.points,
  highScore: state.highScore,
  gainedPoint: state.gainedPoint,
  startMode: state.startMode,
  gameOver: state.gameOver,
  playerSide: state.playerSide,
  safeFruitSide: state.safeFruitSide,
  badFruitSide: state.badFruitSide,
  fruitSpeed: state.fruitSpeed,
});

const mapDispatchToProps = dispatch => ({
  gainPointBadFruit: () => {
    dispatch(gainPointBadFruit());
  },
  gainPointGoodFruit: () => {
    dispatch(gainPointGoodFruit());
  },
  toggledOffGainPoint: () => {
    dispatch(toggledOffGainPoint());
  },
  startGame: () => {
    dispatch(startGame());
  },
  setSafeFruit: (safeFruit, direction, xPosition) => {
    dispatch(setSafeFruit(safeFruit, direction, xPosition));
  },
  setBadFruit: (badFruit, direction, xPosition) => {
    dispatch(setBadFruit(badFruit, direction, xPosition));
  },
  setPlayerSide: direction => {
    dispatch(setPlayerSide(direction));
  },
  increaseFruitSpeed: () => {
    dispatch(increaseFruitSpeed());
  },
  updateHighScore: () => {
    dispatch(updateHighScore());
  },
  endGame: () => {
    dispatch(endGame());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
