import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {SvgProps} from 'react-native-svg';
import {theme} from '../../global/theme/theme';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked: boolean;
}

const CategoryCard = ({title, icon: Icon, checked = false, ...rest}: Props) => {
  const {secondary80, secondary100} = theme.colors;
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary80, secondary100]}>
        <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 104,
    height: 120,

    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',

    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,

    paddingVertical: 7,
    borderRadius: 8,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    marginRight: 8,
    borderRadius: 3,
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: 8,
    borderBottomColor: theme.colors.secondary50,
    borderWidth: 1.6,
    borderRadius: 3,
  },
  title: {
    color: theme.colors.heading,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default CategoryCard;
