import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import {COLORS, SIZES, Data} from '../constants';


const DetailScreen = ({navigation, route}) => {

    const { itemId } = route.params

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary, }}>
            <View style={{flex: 1, paddingHorizontal: 25, paddingVertical: 15, }}>
                <Text style={styles.headerLine1}>book an</Text>
                <Text style={styles.mainHeader}>experience</Text>
            </View>
            <View style={{ flex: 3, marginHorizontal: 25, }}>
                <Text>{Data.events[itemId].title}</Text>
                <Text>{Data.events[itemId].location}</Text>
                <Text>{Data.events[itemId].attendees} Going</Text>
                <Text>{Data.events[itemId].description}</Text>
                <Text>{Data.events[itemId].kmAway} from here</Text>
            </View>

            <View style={{flex: 1, }}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonValue}> Making a booking</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    headerLine1 : { 
        letterSpacing: 2, 
        fontSize: 36, 
        fontWeight: '300', 
        color: COLORS.primary, 
    },
    mainHeader : {
        fontSize: 36, 
        fontWeight: '700', 
        color: COLORS.primary, 
        display: 'flex' 
    },
    primaryButton : { 
        width: SIZES.width - 80,
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 20, 
        color: COLORS.secondary,
    },
    buttonValue: {
        justifyContent:'center', 
        alignItems: 'center', 
        fontSize: 20, 
        fontWeight: '700', 
        color: COLORS.secondary,  },
})


export default DetailScreen;
