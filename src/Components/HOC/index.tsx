import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HOC = (WrapperComponent: any, entity: string) => {
  const NewComponent = (props: any) => {
    const [data, setData] = useState('');

    const onHandleChange = (value: string) => {
      if (entity === 'username') {
        setData(value);
      } else if (entity === 'password') {
        setData(value);
      }
    };
    return (
      <WrapperComponent
        title={entity === 'username' ? 'Username' : 'Password'}
        placeholder={
          entity === 'username'
            ? 'Please enter usernames'
            : 'Please enter password'
        }
        value={data}
        onChangeText={(val: string) => {
          onHandleChange(val);
        }}
        secureTextEntry
      />
    );
  };
  return NewComponent;
};

export default HOC;
