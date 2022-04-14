import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Welcome } from './components/Welcome';
import { Counter } from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome name="ねこねこ" />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
