import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleInstructions } from '../app/reducers/reducer';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBoard: {
    width: Dimensions.get('window').width - 50,
    resizeMode: 'contain',
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
  backgroundView: {
    justifyContent: 'center',
    alignItems: 'center',
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
          <View style={styles.backgroundView}>
            <Text style={styles.boldText}>
              Catch the fruits that are safe for cats and try to avoid the
              poisonous ones!
            </Text>
            <Text style={styles.boldText}>Safe fruits:</Text>
            <Text style={styles.text}>
              Kiwis, Pineapples, Strawberries, Watermelons, Bananas
            </Text>
            <Text style={styles.boldText}>Poisonous fruits:</Text>
            <Text style={styles.text}>
              Lemons, Oranges, Peaches, Cherries, Apples
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={props.toggleInstructions}
            >
              <Text style={styles.buttonText}>Ok, got it!</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.backgroundView}>
            <Image
              source={require('../assets/fruityCats.png')}
              style={styles.logo}
            />
            <TouchableOpacity style={styles.button} onPress={props.startGame}>
              <Text style={styles.buttonText}>Click to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={props.toggleInstructions}
            >
              <Text style={styles.buttonText}>Instructions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Choose a player</Text>
            </TouchableOpacity>
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
