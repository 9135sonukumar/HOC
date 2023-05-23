import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import HOC from '../HOC';

interface Props {
  title: string;
  value: string;
  onChangeText: Function;
  placeholder: string;
  secureTextEntry: boolean;
}

const Username = (props: Props) => {
  const {title, value, onChangeText, placeholder} = props;

  return (
    <View style={styles.majorContainer}>
      <View style={styles.titleBox}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#E3e3e3'}
          onChangeText={val => {
            onChangeText(val);
          }}
          value={value}
          autoCapitalize={'none'}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  majorContainer: {},
  textInputContainer: {
    width: 230,
    height: 40,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  titleBox: {
    marginVertical: 10,
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});

const TextInputUser = HOC(Username, 'username');
export default TextInputUser;
