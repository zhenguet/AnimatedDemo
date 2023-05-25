import { useTheme } from '../../hooks';
import React from 'react';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Switch({ navigation }: any) {
  const { Layout, Gutters, Images } = useTheme();

  const [state, setState] = React.useState(false);
  const timingOffset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: timingOffset.value,
        },
      ],
    };
  });

  return (
    <>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable
          onPress={() => {
            const offset = state ? 0 : 80 - 40;
            setState(!state);
            timingOffset.value = withTiming(offset, {
              duration: 250,
              easing: Easing.out(Easing.exp),
            });
          }}
          style={{
            borderRadius: 9999,
            height: 40,
            width: 80,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'silver',
          }}
        >
          <Animated.Image
            source={state ? Images.night : Images.light}
            style={[styles.box, animatedStyles]}
          />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#1F5A99',
    borderRadius: 20,
    height: 34,
    width: 34,
    margin: 2,
  },
});
