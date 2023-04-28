import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import SpringBox from '../screens/Animation/SpringBox';
import TimingBox from '../screens/Animation/TimingBox';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Example} />
      <Stack.Screen name="SpringBox" component={SpringBox} />
      <Stack.Screen name="TimingBox" component={TimingBox} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
