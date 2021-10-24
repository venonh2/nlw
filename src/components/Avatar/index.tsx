import React from 'react';
import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../global/theme/theme';

type Props = {
  urlImage: string;
};

const Avatar = ({urlImage}: Props) => {
  const {secondary50, secondary80} = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary80]}>
      <Image style={styles.img} source={{uri: urlImage}} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 49,
    height: 49,
    borderRadius: 8,
    marginRight: 22,
  },
  img: {
    width: 46,
    height: 46,
    borderRadius: 8,
  },
});

export default Avatar;
