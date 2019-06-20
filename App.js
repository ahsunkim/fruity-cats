import React, { Component } from 'react';
import Cat from './components/Cat';
import Controls from './components/Controls';
import Counter from './components/Counter';
import BadFruit from './components/BadFruit';
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

      // location of
      moveBadFruitVal: new Animated.Value(0),
      badFruitStartposX: 0,
      badFruitSide: 'left',
      badFruitSpeed: 4200,

      points: 0,
      gameOver: false,
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.animateBadFruit = this.animateBadFruit.bind(this);
  }
  componentDidMount() {
    this.animateBadFruit();
  }
  animateBadFruit() {
    if (!this.state.gameOver) {
      this.state.moveBadFruitVal.setValue(-100);
      const windowH = Dimensions.get('window').height;
      let random = Math.floor(Math.random() * 3);
      if (random === 2) {
        random = 40;
        this.setState({ badFruitSide: 'left' });
      } else {
        random = Dimensions.get('window').width - 140;
        this.setState({ badFruitSide: 'right' });
      }
      this.setState({ badFruitStartposX: random });
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
          this.animateBadFruit();
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
        <Cat
          movePlayerVal={this.state.movePlayerVal}
          playerSide={this.state.playerSide}
          gameOver={this.state.gameOver}
        />
        <BadFruit
          badFruitStartposX={this.state.badFruitStartposX}
          moveBadFruitVal={this.state.moveBadFruitVal}
        />
        <Controls movePlayer={this.movePlayer} />
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
