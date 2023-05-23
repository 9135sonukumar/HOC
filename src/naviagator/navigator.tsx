import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SuccessScreen from '../screens/SuccessScreen';

const stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Success" component={SuccessScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
