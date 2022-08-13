import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../constants';


const DetailScreen = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary, }}>
            <View style={{flex: 1, paddingHorizontal: 25, paddingVertical: 15, }}>
                <Text style={styles.headerLine1}>book an</Text>
                <Text style={styles.mainHeader}>experience</Text>
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
})


export default DetailScreen;
