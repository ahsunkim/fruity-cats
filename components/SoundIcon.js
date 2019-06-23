import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  icon: {
    top: 10,
  },
});

function SoundIcon(props) {
  return (
    <TouchableOpacity onPress={() => props.playOrPauseSong()}>
      {props.playSongStatus ? (
        <Image style={styles.icon} source={require('../assets/soundOn.png')} />
      ) : (
        <Image style={styles.icon} source={require('../assets/soundOff.png')} />
      )}
    </TouchableOpacity>
  );
}

const mapStateToProps = state => ({
  playSongStatus: state.playSongStatus,
});

export default connect(mapStateToProps)(SoundIcon);
