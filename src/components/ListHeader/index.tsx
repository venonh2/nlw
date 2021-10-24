import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from '../../global/theme/theme';

type Props = {
  title: string;
  subtitle: string;
};

const ListHeader = ({title, subtitle}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    color: theme.colors.heading,
    fontSize: 18,
  },
  subtitle: {
    color: theme.colors.highlight,
    fontSize: 15,
  },
});

export default ListHeader;
