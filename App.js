import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from './screens';

export default function App() {
  return (
    <SafeAreaView>
        <StatusBar />
        <LoginScreen />
    </SafeAreaView>
  );
}

