import React, { Component } from 'react';
import Cat from './components/Cat';
import Controls from './components/Controls';
import Counter from './components/Counter';
import Dog from './components/Dog';
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
      moveDogVal: new Animated.Value(0),
      dogStartposX: 0,
      dogSide: 'left',
      dogSpeed: 4200,

      points: 0,
      gameOver: false,
    };
    this.movePlayer = this.movePlayer.bind(this);
    this.animateDog = this.animateDog.bind(this);
  }
  componentDidMount() {
    this.animateDog();
  }
  animateDog() {
    if (!this.state.gameOver) {
      this.state.moveDogVal.setValue(-100);
      const windowH = Dimensions.get('window').height;
      let random = Math.floor(Math.random() * 3);
      if (random === 2) {
        random = 40;
        this.setState({ dogSide: 'left' });
      } else {
        random = Dimensions.get('window').width - 140;
        this.setState({ dogSide: 'right' });
      }
      this.setState({ dogStartposX: random });
      let refreshIntervalId = setInterval(() => {
        if (
          this.state.moveDogVal._value > windowH - 200 &&
          this.state.moveDogVal._value < windowH - 100 &&
          this.state.playerSide === this.state.dogSide
        ) {
          this.setState({ gameOver: true });
          this.gameOver();
        }
      }, 50);
      setInterval(() => {
        let dogSpeed = this.state.dogSpeed;
        this.setState({ dogSpeed: dogSpeed - 50 });
      }, 20000);
      Animated.timing(this.state.moveDogVal, {
        toValue: Dimensions.get('window').height,
        duration: this.state.dogSpeed,
      }).start(event => {
        if (event.finished && this.state.gameOver === false) {
          clearInterval(refreshIntervalId);
          let points = this.state.points;
          this.setState({ points: points + 1 });
          this.animateDog();
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
  gameOver() {
    alert('You lost!');
  }
  render() {
    return (
      <ImageBackground
        source={require('./background.png')}
        style={styles.container}
      >
        <Counter points={this.state.points} />
        <Cat
          movePlayerVal={this.state.movePlayerVal}
          playerSide={this.state.playerSide}
        />
        <Dog
          dogStartposX={this.state.dogStartposX}
          moveDogVal={this.state.moveDogVal}
        />
        <Controls movePlayer={this.movePlayer} />
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
