import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import SpringBox from '../screens/Animation/SpringBox';
import TimingBox from '../screens/Animation/TimingBox';
import WobbleExample from '../screens/Animation/WobbleExample';
import HandlingGesture from '../screens/Animation/HandlingGesture';
import HandlingContinuous from '../screens/Animation/HandlingContinuous';
import InvertedFlatListExample from '../screens/Animation/InvertedFlatListExample';
import Slider from '../screens/Animation/Slider';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Example} />
      <Stack.Screen name="SpringBox" component={SpringBox} />
      <Stack.Screen name="TimingBox" component={TimingBox} />
      <Stack.Screen name="WobbleExample" component={WobbleExample} />
      <Stack.Screen name="HandlingGesture" component={HandlingGesture} />
      <Stack.Screen name="HandlingContinuous" component={HandlingContinuous} />
      <Stack.Screen
        name="InvertedFlatListExample"
        component={InvertedFlatListExample}
      />
      <Stack.Screen name="Slider" component={Slider} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
