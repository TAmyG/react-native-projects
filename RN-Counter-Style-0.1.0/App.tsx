import React from 'react';
import {SafeAreaView} from 'react-native';
// import {FlexDirectionScreen} from './src/screens/FlexDirectionScreen';
import {TareaScreen} from './src/screens/TareaScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {PositionScreenAbsolute} from './src/screens/PositionScreenAbsolute';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreenRelative} from './src/screens/PositionScreenRelative';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
//import {ContadorScreen} from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TareaScreen />
    </SafeAreaView>
    //<ContadorScreen />
  );
};
