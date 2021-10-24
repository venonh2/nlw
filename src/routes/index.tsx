import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './auth.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default Routes;
