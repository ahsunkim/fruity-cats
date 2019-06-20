import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  points: {
    top: 40,
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Cat extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.points}>
          <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
            {this.props.points}
          </Text>
        </View>
      </View>
    );
  }
}
