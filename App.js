import React, { Component } from 'react';
import Cat from './components/Cat';
import Controls from './components/Controls';
import Counter from './components/Counter';
import GameOver from './components/GameOver';
import StartingScreen from './components/StartingScreen';
import BadFruit from './components/BadFruit';
import SafeFruit from './components/SafeFruit';

import {
  AppRegistry,
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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // location of the cat player in terms of X-axis
      movePlayerVal: new Animated.Value(40),
      // a more generic location of cat player
      playerSide: 'left',

      // location of poisonous fruits
      moveBadFruitVal: new Animated.Value(-100),
      badFruitStartposX: 0,
      badFruitSide: 'left',
      badFruitSpeed: 4000,
      badFruit: 'lemon',

      // location of safe fruits
      moveSafeFruitVal: new Animated.Value(-100),
      safeFruitStartposX: 0,
      safeFruitSide: 'left',
      safeFruitSpeed: 4000,
      safeFruit: 'kiwi',

      points: 0,
      startMode: true,
      gameOver: false,
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.animateBadFruit = this.animateBadFruit.bind(this);
    this.animateSafeFruit = this.animateSafeFruit.bind(this);
    this.animateRandomFruit = this.animateRandomFruit.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  startGame() {
    this.setState({ startMode: false, gameOver: false, points: 0 });
    this.animateRandomFruit();
  }
  animateRandomFruit() {
    let badOrSafeRandomizer = Math.floor(Math.random() * 2);
    let safeFruitArr = [
      'kiwi',
      'pineapple',
      'strawberry',
      'watermelon',
      'banana',
    ];
    let badFruitArr = ['lemon', 'orange', 'peach', 'cherry', 'apple'];
    let fruitRandomizer = Math.floor(Math.random() * 5);
    if (badOrSafeRandomizer) {
      this.animateBadFruit(badFruitArr[fruitRandomizer]);
    } else {
      this.animateSafeFruit(safeFruitArr[fruitRandomizer]);
    }
  }
  animateSafeFruit(fruit) {
    // if the game isn't over...
    if (!this.state.gameOver) {
      this.setState({ safeFruit: fruit });
      this.state.moveSafeFruitVal.setValue(-100);
      const windowH = Dimensions.get('window').height;
      let randomizer = Math.floor(Math.random() * 3);
      if (randomizer === 2) {
        randomizer = 40;
        this.setState({ safeFruitSide: 'left' });
      } else if (randomizer === 0) {
        randomizer = Dimensions.get('window').width - 140;
        this.setState({ safeFruitSide: 'right' });
      }
      this.setState({ safeFruitStartposX: randomizer });
      let gainedPoint = false;
      let refreshIntervalId = setInterval(() => {
        if (
          this.state.moveSafeFruitVal._value > windowH - 200 &&
          this.state.moveSafeFruitVal._value < windowH - 100 &&
          this.state.playerSide === this.state.safeFruitSide &&
          !gainedPoint
        ) {
          gainedPoint = true;
          let points = this.state.points;
          this.setState({ points: points + 1 });
        }
      }, 50);
      setInterval(() => {
        let safeFruitSpeed = this.state.safeFruitSpeed;
        this.setState({ safeFruitSpeed: safeFruitSpeed - 50 });
      }, 20000);
      Animated.timing(this.state.moveSafeFruitVal, {
        toValue: Dimensions.get('window').height,
        duration: this.state.safeFruitSpeed,
      }).start(event => {
        if (event.finished && this.state.gameOver === false) {
          clearInterval(refreshIntervalId);
          this.animateRandomFruit();
        }
      });
    }
  }
  animateBadFruit(fruit) {
    // if the game isn't over...
    if (!this.state.gameOver) {
      this.setState({ badFruit: fruit });
      this.state.moveBadFruitVal.setValue(-100);
      const windowH = Dimensions.get('window').height;
      let randomizer = Math.floor(Math.random() * 3);
      if (randomizer === 2) {
        randomizer = 40;
        this.setState({ badFruitSide: 'left' });
      } else if (randomizer === 0) {
        randomizer = Dimensions.get('window').width - 140;
        this.setState({ badFruitSide: 'right' });
      }
      this.setState({ badFruitStartposX: randomizer });
      let refreshIntervalId = setInterval(() => {
        if (
          this.state.moveBadFruitVal._value > windowH - 200 &&
          this.state.moveBadFruitVal._value < windowH - 100 &&
          this.state.playerSide === this.state.badFruitSide
        ) {
          this.setState({ gameOver: true });
        }
      }, 50);
      setInterval(() => {
        let badFruitSpeed = this.state.badFruitSpeed;
        this.setState({ badFruitSpeed: badFruitSpeed - 50 });
      }, 20000);
      Animated.timing(this.state.moveBadFruitVal, {
        toValue: Dimensions.get('window').height,
        duration: this.state.badFruitSpeed,
      }).start(event => {
        if (event.finished && this.state.gameOver === false) {
          clearInterval(refreshIntervalId);
          let points = this.state.points;
          this.setState({ points: points + 1 });
          this.animateRandomFruit();
        }
      });
    }
  }
  movePlayer(direction) {
    if (direction === 'right') {
      this.setState({ playerSide: 'right' });
      Animated.spring(this.state.movePlayerVal, {
        toValue: Dimensions.get('window').width - 140,
        tension: 100,
      }).start();
    } else if (direction === 'left') {
      this.setState({ playerSide: 'left' });
      Animated.spring(this.state.movePlayerVal, {
        toValue: 40,
        tension: 100,
      }).start();
    }
  }
  render() {
    return (
      <ImageBackground
        source={require('./jungle.jpg')}
        style={styles.container}
      >
        <Counter points={this.state.points} />
        {this.state.startMode && <StartingScreen startGame={this.startGame} />}
        {this.state.gameOver && <GameOver startGame={this.startGame} />}
        <Cat
          movePlayerVal={this.state.movePlayerVal}
          playerSide={this.state.playerSide}
          gameOver={this.state.gameOver}
        />
        <SafeFruit
          safeFruitStartposX={this.state.safeFruitStartposX}
          moveSafeFruitVal={this.state.moveSafeFruitVal}
          safeFruit={this.state.safeFruit}
        />
        <BadFruit
          badFruitStartposX={this.state.badFruitStartposX}
          moveBadFruitVal={this.state.moveBadFruitVal}
          badFruit={this.state.badFruit}
        />
        <Controls movePlayer={this.movePlayer} />
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
