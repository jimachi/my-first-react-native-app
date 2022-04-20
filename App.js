import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

// import { Welcome } from './components/Welcome';
// import { Counter } from './components/Counter';
// import { Alert } from './components/Alert';
// import { Clock } from './components/Clock';
import { Flexbox } from './components/WidthHeight';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Flexbox />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
