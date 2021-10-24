import React from 'react';
import {Image, StyleSheet} from 'react-native';

const GuildIcon = () => {
  return <Image style={styles.img} source={{uri: ''}} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  img: {
    width: 64,
    height: 64,
  },
});

export default GuildIcon;
