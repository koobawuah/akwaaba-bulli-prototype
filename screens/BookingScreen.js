import { SafeAreaView, View, Text } from 'react-native';
import {COLORS} from '../constants';


const BookingScreen = () => {

    return (
        <SafeAreaView style={{backgroundColor: COLORS.secondary, flex: 1, }}>
            <View style={{flex: 1, paddingVertical: 15, paddingHorizontal: 25, }}>
                <Text style={{ fontSize: 36, fontWeight: '800', color: COLORS.primary, }}>My Bookings</Text>
            </View>
        </SafeAreaView>
    )
}


export default BookingScreen

