import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import HOC from '../HOC';
import {TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  value: string;
  onChangeText: Function;
  placeholder: string;
  secureTextEntry: boolean;
}

const CustomInput = (props: Props) => {
  const {title, value, onChangeText, placeholder, secureTextEntry} = props;
  const [isVisible, setIsvisible] = useState(false);
  const [secureEntry, setSecureTextEntry] = React.useState(secureTextEntry);
  console.log({props});
  return (
    <View style={styles.majorContainer}>
      <View style={styles.titleBox}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={val => {
            onChangeText(val);
          }}
          value={value}
          placeholderTextColor={'#E3e3e3'}
          autoCapitalize={'none'}
          style={styles.textInput}
          secureTextEntry={secureEntry || false}
        />
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setIsvisible(!isVisible);
              setSecureTextEntry(!secureEntry);
            }}>
            <Image
              source={
                isVisible
                  ? require('../../assets/images/visible.png')
                  : require('../../assets/images/eye_close.png')
              }
            />
          </TouchableOpacity>
        )}
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

const TextInputPassword = HOC(CustomInput, 'password');
export default TextInputPassword;
