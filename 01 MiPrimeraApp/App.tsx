import React from 'react';
import {SafeAreaView} from 'react-native';
import FlexScreen from './src/screens/FlexScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import ContadorScreen from './src/screens/ContadorScreen';

// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';
// import PositionScreen from './src/screens/PositionScreen';
import TareaScreen from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen />
      <ContadorScreen />
      <BoxObjectModelScreen />
      <DimensionsScreen />
      <PositionScreen />
      <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
