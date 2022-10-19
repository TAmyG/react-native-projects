import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/>
      <MenuLateralBasico /> */}

      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
