import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export function Counter() {
  const [count, setCount] = useState(0);

  const onPressMinusOne = () => {
    setCount(count - 1);
  };

  const onPressPlusOne = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Button title="-1" onPress={onPressMinusOne} />
      <Text>{count}</Text>
      <Button title="+1" onPress={onPressPlusOne} />
    </View>
  );
}
