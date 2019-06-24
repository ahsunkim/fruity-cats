import React, { Component } from 'react';
import Cat from './Cat';
import Counter from './Counter';
import GameOver from './GameOver';
import StartingScreen from './StartingScreen';
import SoundIcon from './SoundIcon';
import BadFruit from './BadFruit';
import SafeFruit from './SafeFruit';
import { Audio } from 'expo-av';
import { connect } from 'react-redux';
import {
  gainPointBadFruit,
  gainPointGoodFruit,
  toggledOffGainPoint,
  startGame,
  endGame,
  increaseFruitSpeed,
} from '../app/reducers/gameLogicReducer';

import { playPauseSong } from '../app/reducers/gameSettingsReducer';

import {
  setSafeFruit,
  setBadFruit,
  setPlayerPos,
} from '../app/reducers/animatedObjectsReducer';

import {
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
  PanResponder,
  View,
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
    this.backgroundMusic = new Audio.Sound();
    this.gainPointSound = new Audio.Sound();
    this.gameOverSound = new Audio.Sound();
    this.animateBadFruit = this.animateBadFruit.bind(this);
    this.animateSafeFruit = this.animateSafeFruit.bind(this);
    this.animateRandomFruit = this.animateRandomFruit.bind(this);
    this.startGame = this.startGame.bind(this);
    this.playOrPauseSong = this.playOrPauseSong.bind(this);
  }
  async componentDidMount() {
    await this.backgroundMusic.loadAsync(require('../assets/catMusic.mp3'));
    await this.gainPointSound.loadAsync(require('../assets/gainPoint.mp3'));
    await this.gameOverSound.loadAsync(require('../assets/gameOver.mp3'));
    await this.backgroundMusic.setIsLoopingAsync(true);
    // this.playOrPauseSong();
  }
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onPanResponderGrant: (event, gestureState) => false,
      onPanResponderMove: (event, gestureState) => false,
      onPanResponderRelease: async (event, gestureState) => {
        await this.props.setPlayerPos(+event.nativeEvent.locationX);
        Animated.spring(this.state.movePlayerVal, {
          toValue: this.props.playerPosX,
          tension: 100,
        }).start();
      },
    });
  }
  async playOrPauseSong() {
    try {
      if (this.props.playSongStatus) {
        await this.backgroundMusic.stopAsync();
      } else {
        this.backgroundMusic.playAsync();
      }
      this.props.playPauseSong();
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
    let randomizer = Math.floor(Math.random() * Dimensions.get('window').width);
    await this.props.setSafeFruit(fruit, randomizer);
    let refreshIntervalId = setInterval(async () => {
      if (
        this.state.moveSafeFruitVal._value > windowH - 200 &&
        this.state.moveSafeFruitVal._value < windowH - 100 &&
        this.props.playerPosX >= randomizer - 70 &&
        this.props.playerPosX <= randomizer + 70 &&
        !this.props.gainedPoint
      ) {
        await this.props.gainPointGoodFruit();
        this.gainPointSound.replayAsync();
      }
    }, 50);
    setInterval(() => {
      this.props.increaseFruitSpeed();
    }, 40000);
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
    let randomizer = Math.floor(Math.random() * Dimensions.get('window').width);
    await this.props.setBadFruit(fruit, randomizer);
    let refreshIntervalId = setInterval(() => {
      if (
        this.state.moveBadFruitVal._value > windowH - 200 &&
        this.state.moveBadFruitVal._value < windowH - 100
      ) {
        if (
          this.props.playerPosX >= randomizer - 70 &&
          this.props.playerPosX <= randomizer + 70
        ) {
          this.props.endGame();
          this.gameOverSound.replayAsync();
        } else {
          if (!this.props.gainedPoint) {
            this.props.gainPointBadFruit();
            this.gainPointSound.replayAsync();
          }
        }
      }
    }, 50);
    setInterval(() => {
      this.props.increaseFruitSpeed();
    }, 40000);
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
      }
    });
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/jungle.jpg')}
        style={styles.container}
      >
        <View style={{ flex: 1 }} {...this.panResponder.panHandlers}>
          <SoundIcon playOrPauseSong={this.playOrPauseSong} />
          <Counter />
          {this.props.startMode && (
            <StartingScreen startGame={this.startGame} />
          )}
          {this.props.gameOver && <GameOver startGame={this.startGame} />}
          <Cat movePlayerVal={this.state.movePlayerVal} />
          <SafeFruit moveSafeFruitVal={this.state.moveSafeFruitVal} />
          <BadFruit moveBadFruitVal={this.state.moveBadFruitVal} />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  points: state.gameLogic.points,
  highScore: state.gameLogic.highScore,
  gainedPoint: state.gameLogic.gainedPoint,
  startMode: state.gameLogic.startMode,
  gameOver: state.gameLogic.gameOver,
  playerPosX: state.animatedObject.playerPosX,
  safeFruitSide: state.animatedObject.safeFruitSide,
  badFruitSide: state.animatedObject.badFruitSide,
  fruitSpeed: state.gameLogic.fruitSpeed,
  playSongStatus: state.gameSettings.playSongStatus,
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
  endGame: () => {
    dispatch(endGame());
  },
  playPauseSong: () => {
    dispatch(playPauseSong());
  },
  setSafeFruit: (safeFruit, xPosition) => {
    dispatch(setSafeFruit(safeFruit, xPosition));
  },
  setBadFruit: (badFruit, xPosition) => {
    dispatch(setBadFruit(badFruit, xPosition));
  },
  setPlayerPos: xPosition => {
    dispatch(setPlayerPos(xPosition));
  },
  increaseFruitSpeed: () => {
    dispatch(increaseFruitSpeed());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
