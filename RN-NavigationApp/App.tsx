import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
import {Tabs} from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/>
      <MenuLateralBasico /> */}

      {/* <Tabs /> */}
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
