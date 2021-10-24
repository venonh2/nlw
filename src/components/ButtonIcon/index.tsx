import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import DicordImg from '../../assets/discord.png';
import {theme} from '../../global/theme/theme';

interface Props extends RectButtonProps {
  title: string;
}

const ButtonIcon = ({title = '', ...rest}: Props) => {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DicordImg} style={styles.img} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: theme.colors.line,
    height: 56,
    paddingRight: 16,
  },
  img: {
    alignSelf: 'center',
  },
  text: {
    marginHorizontal: 40,
    fontSize: 15,
    color: theme.colors.heading,
  },
});

export default ButtonIcon;
