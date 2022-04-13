import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Welcome } from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome name="ねこねこ" />
      <Welcome name="いぬいぬ" />
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
