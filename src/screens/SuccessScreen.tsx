import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>User login successfully!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#111',
  },
});
export default SuccessScreen;
