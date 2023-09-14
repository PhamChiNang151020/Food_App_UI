import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Onboarding from './src/components/onboarding/Onboarding';

function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
