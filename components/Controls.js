import React from 'react';
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

export default function Controls(props) {
  return (
    <View style={styles.control}>
      {props.playerSide === 'right' ? (
        <Text style={styles.left} onPress={() => props.movePlayer('center')}>
          {'<'}
        </Text>
      ) : (
        <Text style={styles.left} onPress={() => props.movePlayer('left')}>
          {'<'}
        </Text>
      )}
      {props.playerSide === 'left' ? (
        <Text style={styles.right} onPress={() => props.movePlayer('center')}>
          {'>'}
        </Text>
      ) : (
        <Text style={styles.right} onPress={() => props.movePlayer('right')}>
          {'>'}
        </Text>
      )}
    </View>
  );
}
