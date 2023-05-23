import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import TextInputPassword from '../Components/CustomInput';
import TextInputUser from '../Components/CustomInput/Username';
import {StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');
const SIZE = width * 0.2;

const LoginScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.loginBoxStyle}>
        <Text style={styles.logintxtStyle}>WELCOME</Text>
        <TextInputUser />
        <TextInputPassword />
        <View style={styles.avtarStyle}>
          <Text style={styles.nameStyle}>{'SK'}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('Success');
            ToastAndroid.show('User login successfully!', 1000);
          }}
          style={styles.buttonStyle}>
          <Text style={styles.signStyle}>{'SignIn'}</Text>
        </TouchableOpacity>
        <Text style={styles.forgottxtStyle}>{'Forgot password?'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginBoxStyle: {
    width: width * 0.75,
    height: 'auto',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },

  logintxtStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003C92',
    marginTop: 50,
  },
  avtarStyle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderColor: '#E3FAF0',
    borderWidth: 5,
    position: 'absolute',
    top: height * -0.045,
    backgroundColor: '#003C92',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },
  buttonStyle: {
    width: width * 0.65,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003C92',
    borderRadius: 20,
    marginTop: 20,
  },
  signStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },
  forgottxtStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#003C92',
    marginTop: 5,
  },
});
export default LoginScreen;
