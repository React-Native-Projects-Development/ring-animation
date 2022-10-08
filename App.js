import React from 'react';
import {View as RView, StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {View as MotiView} from 'moti';

import {Easing} from 'react-native-reanimated';

const _color = '#6E01EF';
const _size = 100;

const App = () => {
  return (
    <RView style={styles.container}>
      <RView style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              from={{opacity: 0.5, scale: 1}}
              animate={{opacity: 0, scale: 4}}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                loop: true,
                repeatReverse: false,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </RView>
    </RView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
