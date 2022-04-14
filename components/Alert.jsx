import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export function Alert() {
  useEffect(() => {
    alert('hello!');
  });

  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
}
