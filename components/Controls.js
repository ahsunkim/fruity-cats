import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  control: {
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 100,
  },
  left: {
    flex: 1,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  right: {
    flex: 1,
    color: '#fff',
    margin: 0,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default class Controls extends Component {
  render() {
    return (
      <View style={styles.control}>
        {this.props.playerSide === 'right' ? (
          <Text
            style={styles.left}
            onPress={() => this.props.movePlayer('center')}
          >
            {'<'}
          </Text>
        ) : (
          <Text
            style={styles.left}
            onPress={() => this.props.movePlayer('left')}
          >
            {'<'}
          </Text>
        )}
        {this.props.playerSide === 'left' ? (
          <Text
            style={styles.right}
            onPress={() => this.props.movePlayer('center')}
          >
            {'>'}
          </Text>
        ) : (
          <Text
            style={styles.right}
            onPress={() => this.props.movePlayer('right')}
          >
            {'>'}
          </Text>
        )}
      </View>
    );
  }
}
