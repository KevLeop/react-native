import React from 'react';
import {
  View,
  StyleSheet,
  // Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.2}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W:{width} | H:{height}
      </Text>
    </View>
  );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0a23B',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
