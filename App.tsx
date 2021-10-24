import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Background from './src/components/Background';
import {theme} from './src/global/theme/theme';
import Routes from './src/routes';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.secondary80}
        />
        <Routes />
      </Background>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
