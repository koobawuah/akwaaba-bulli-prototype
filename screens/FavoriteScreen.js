import { View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../constants';


const FavoriteScreen = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
            <Text>for the love of Accra</Text>
        </SafeAreaView>
    )
}


export default FavoriteScreen;

