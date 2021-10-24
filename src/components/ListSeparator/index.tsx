import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../global/theme/theme';

const ListSeparator = () => {
  return <View style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    alignSelf: 'flex-end',

    marginVertical: 21,
  },
});

export default ListSeparator;
