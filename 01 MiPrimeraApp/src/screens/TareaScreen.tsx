import React from 'react';
import {View, StyleSheet} from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

export default TareaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    // flex: 1,
    // width: '100%',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    // top: 100,
  },
  cajaNaranja: {
    width: 100,
    // flex: 1,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange',
    // left: 100,
    top: 50,
  },
  cajaAzul: {
    // width: '100%',
    width: 100,
    // flex: 2,

    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'blue',
  },
});
