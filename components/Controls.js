import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  control: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 150,
  },
  image: {
    width: 70,
    height: 60,
  },
});

function Controls(props) {
  return (
    <View style={styles.control}>
      {props.playerSide === 'right' ? (
        <TouchableOpacity onPress={() => props.movePlayer('center')}>
          <Image
            style={styles.image}
            source={require('../assets/watermelonleft.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => props.movePlayer('left')}>
          <Image
            style={styles.image}
            source={require('../assets/watermelonleft.png')}
          />
        </TouchableOpacity>
      )}
      {props.playerSide === 'left' ? (
        <TouchableOpacity onPress={() => props.movePlayer('center')}>
          <Image
            style={styles.image}
            source={require('../assets/watermelonright.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => props.movePlayer('right')}>
          <Image
            style={styles.image}
            source={require('../assets/watermelonright.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const mapStateToProps = state => ({
  playerSide: state.animatedObject.playerSide,
});

export default connect(mapStateToProps)(Controls);
