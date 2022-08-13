import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


const LoginScreen = ({navigation}) => {

    return (
        <SafeAreaView>
            <Text>Akwaabaa Bulli</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Dash')}> 
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default LoginScreen;
