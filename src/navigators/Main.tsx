import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import SpringBox from '../screens/Animation/SpringBox';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Example} />
      <Stack.Screen name="SpringBox" component={SpringBox} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
