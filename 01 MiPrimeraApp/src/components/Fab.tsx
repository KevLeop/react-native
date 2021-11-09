import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';

interface IOwnProps {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fab = ({title, onPress, position = 'br'}: IOwnProps) => {
  return (
    <View
      style={[
        styles.fabLocation,
        position === 'br' ? styles.right : styles.left,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  left: {
    left: 20,
  },
  right: {
    right: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Fab;
