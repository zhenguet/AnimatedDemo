import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Button, StyleSheet, View } from 'react-native';

export default function SpringBox() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {}, finished => {
            if (finished) {
              console.log('ANIMATION ENDED');
            } else {
              console.log('ANIMATION GOT CANCELLED');
            }
          }),
        },
      ],
    };
  });

  return (
    <>
      <View style={{ flex: 1, padding: 15 }}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </View>
      <Button
        onPress={() => {
          offset.value = Math.random();
          // offset.value = withSpring(Math.random(), {}, (finished) => {
          //   if (finished) {
          //     console.log("ANIMATION ENDED");
          //   } else {
          //     console.log("ANIMATION GOT CANCELLED");
          //   }
          // });
        }}
        title="Move"
      />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#1F5A99',
    borderRadius: 20,
    height: 100,
    width: 100,
  },
});
