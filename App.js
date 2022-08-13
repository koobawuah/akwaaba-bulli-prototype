import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {

    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator> 
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

