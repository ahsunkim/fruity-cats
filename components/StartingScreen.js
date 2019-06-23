import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Button,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleInstructions } from '../app/reducers/reducer';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBoard: {
    width: 345,
    height: 229,
    bottom: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 110,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  buttonView: { backgroundColor: '#F6F1E5', marginTop: 10 },
  instructionsButtonView: {
    backgroundColor: '#5A4224',
    marginTop: 10,
  },
  textBackgroundView: {
    backgroundColor: '#F6F1E5',
    color: '#5A4224',
  },
  text: {
    fontSize: 18,
    color: '#5A4224',
  },
  boldText: {
    fontSize: 20,
    color: '#5A4224',
    fontWeight: 'bold',
  },
});

function StartingScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/gameMessage.png')}
        style={styles.messageBoard}
      >
        {props.instructionsMode ? (
          <View style={styles.textBackgroundView}>
            <Text style={styles.boldText}>
              Catch fruits that are safe for cats:
            </Text>
            <Text style={styles.text}>
              Kiwis, Pineapples, Strawberries, Watermelons, Bananas
            </Text>
            <Text style={styles.boldText}>
              Avoid fruits that are poisonous to cats:
            </Text>
            <Text style={styles.text}>
              Lemons, Oranges, Peaches, Cherries, Apples
            </Text>
            <View style={styles.instructionsButtonView}>
              <Button
                color="#F6F1E5"
                onPress={props.toggleInstructions}
                title="Ok, got it!"
              />
            </View>
          </View>
        ) : (
          <View>
            <Image
              source={require('../assets/fruityCats.png')}
              style={styles.logo}
            />
            <View style={styles.buttonView}>
              <Button
                color="#5A4224"
                onPress={props.startGame}
                title="Click to Play"
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                color="#5A4224"
                onPress={props.toggleInstructions}
                title="Instructions"
              />
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = state => ({
  instructionsMode: state.instructionsMode,
});

const mapDispatchToProps = dispatch => ({
  toggleInstructions: () => {
    dispatch(toggleInstructions());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartingScreen);
