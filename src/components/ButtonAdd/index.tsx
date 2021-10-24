import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../global/theme/theme';

interface Props extends RectButtonProps {}

const ButtonAdd = ({...rest}: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialIcon style={styles.icon} name="plus" size={24} />
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,

    height: 48,
    width: 48,
    backgroundColor: theme.colors.primary,
  },
  icon: {
    color: theme.colors.heading,
  },
});

export default ButtonAdd;
