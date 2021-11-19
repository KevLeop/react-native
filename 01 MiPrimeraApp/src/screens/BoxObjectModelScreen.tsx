import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    padding: 20,
    fontSize: 25,
    // width: 150,
    borderWidth: 5,
    // backgroundColor: 'red',
  },
});
