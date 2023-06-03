import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  Button,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../app/hook';
import {decrement, increment} from '../features/counter/counterSlice';
import {useLoginMutation, useShowUserDetailsQuery} from '../api/apiSlice';

const Counter = () => {
  const {value} = useAppSelector(state => state.counter);

  const dispatch = useAppDispatch();

  const [loginApi, {isLoading}] = useLoginMutation();
  const {data, isFetching} = useShowUserDetailsQuery(undefined);

  const apiUserLogin = async () => {
    let req = {
      email: 'aanand.kumar@cfcsindia.com',
      password: '8825',
    };
    try {
      const res = await loginApi(req).unwrap();
      debugger;
    } catch (error) {
      console.log('ERROR===>>>', error);
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} />
      <View style={styles.row}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.signSize}>-</Text>
        </Pressable>
        <Text style={styles.valueStyle}>{value}</Text>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => dispatch(increment())}>
          <Text style={styles.signSize}>+</Text>
        </Pressable>
      </View>
      <Button title="Login" onPress={apiUserLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  valueStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#459',
  },
  signSize: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  buttonStyle: {
    width: 50,
    height: 25,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Counter;
