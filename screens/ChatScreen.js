import { View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../constants';


const ChatScreen = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
            <View style={{flex: 1, paddingVertical: 15, paddingHorizontal: 25, }}>
                <Text style={{ fontSize: 36, fontWeight: '700', color: COLORS.primary, }}>Recent Chats</Text>
            </View>
        </SafeAreaView>
    )
}


export default ChatScreen;

