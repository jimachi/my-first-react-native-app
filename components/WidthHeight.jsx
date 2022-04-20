import { View, Text, StyleSheet } from 'react-native';

export const Flexbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Item 1</Text>
      <Text style={styles.item}>Item 2</Text>
      <Text style={styles.item}>Item 3</Text>
      <Text style={styles.item}>Item 4</Text>
      <Text style={styles.item}>Item 5</Text>
      <Text style={styles.item}>Item 6</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 200,
  },
  item: {
    width: 100,
    height: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bbb',
  }
});
