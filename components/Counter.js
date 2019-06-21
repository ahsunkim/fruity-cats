import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pointsContainer: {
    top: 40,
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: { fontWeight: 'bold', fontSize: 40 },
});

export default class Counter extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>{this.props.points}</Text>
        </View>
      </View>
    );
  }
}
