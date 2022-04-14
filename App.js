import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import { Welcome } from './components/Welcome';
// import { Counter } from './components/Counter';
// import { Alert } from './components/Alert';
import { Clock } from './components/Clock';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Clock />
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
