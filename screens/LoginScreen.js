import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {COLORS, SIZES, images} from '../constants';


const LoginScreen = ({navigation}) => {

    const [ email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');

    return (
            <View style={{flex: 1, }}>
            <StatusBar theme='dark'/>
            <ImageBackground 
                source={images.splashBgImage}
                resizeMode='cover'
                style={{
                    flex: 1,
                    justifyContent: 'flex-start', 
                    paddingTop: '40%',
                    zIndex: 0,
                }}
                >
                <Image 
                    source={images.logo}
                    style={{
                        width: 230,
                        height: 105,
                        alignSelf: 'center',
                        marginBottom: 50,
                    }}
                    />

                <KeyboardAvoidingView 
                        style={{flex: 1, paddingVeritical: 5, }}
                        behavior='padding'
                        >
                    <View style={{
                        width: SIZES.width - 25,
                        alignSelf: 'center',
                    }}> 

                        <TextInput 
                            onChangeText={ (text) => setEmail(text) }
                            placeholder="Email" 
                            keyboardType="email-address" 
                            placeholderTextColor='#888888' 
                            style={styles.input} />

                        <TextInput 
                            onChangeText={ (text) => setPass(text)}
                            placeholder="Password" 
                            textContentType="password" 
                            secureTextEntry={true} 
                            placeholderTextColor='#888888' 
                            style={styles.input} />
        
                        <TouchableOpacity style={{alignSelf: 'flex-end', }}> 
                            <Text style={{color: COLORS.primary, fontSize: 16, fontWeight: '700', paddingVertical: 20, }}> 
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                </View>
        
                <TouchableOpacity 
                    style={styles.primaryButton} 
                    onPress={() => { if(email !== '' && pass !== ''){navigation.navigate('Dash')} else { alert('Sorry please enter your login deatils')} } 
                    }> 
                    <Text style={styles.buttonValue}>Login</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>

            </ImageBackground>

            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start',
    },
    input: {
        width: '100%',
        height: 50, 
        backgroundColor: COLORS.secondary,
        fontSize: 16,
        fontWeight: '700',
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10, 
    },
    primaryButton : { 
        width: SIZES.width - 20,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 10, 
        color: COLORS.secondary,
    },
    buttonValue: {
        justifyContent:'center', 
        alignItems: 'center', 
        fontSize: 20, 
        fontWeight: '600', 
        color: COLORS.secondary,  },
})

export default LoginScreen;
