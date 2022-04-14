import { useState, useEffect } from "react";
import { View, Text } from 'react-native';

export function Clock () {
  const date = useClock();

  return (
    <View>
      <Text>現在時刻</Text>
      <Text>{ date.toLocaleTimeString() }</Text>
    </View>
  );
}

const useClock = () => {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return date;
};