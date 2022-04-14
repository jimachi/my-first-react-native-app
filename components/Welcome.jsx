import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Welcome(props) {
  const [name] = useState('Sara');
  return (
    <View>
      <Text style={styles.text}>Hello, {props.name}!!</Text>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({
      ios: 'Hiragino Mincho ProN',
      android: 'serif',
    }),
    fontSize: 48,
  },
});
