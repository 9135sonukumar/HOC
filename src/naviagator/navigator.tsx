import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SuccessScreen from '../screens/SuccessScreen';
import Counter from '../screens/Counter';

const stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Counter">
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Success" component={SuccessScreen} />
        <stack.Screen name="Counter" component={Counter} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
