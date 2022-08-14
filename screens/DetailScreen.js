import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import {COLORS, SIZES, Data, images} from '../constants';


const DetailScreen = ({route}) => {

    const { itemId } = route.params

    return (
        <View style={{flex: 1, backgroundColor: COLORS.secondary, }}>
            <ImageBackground 
                source={Data.events[itemId].eventImage}
                resizeMode='cover'
                style={{flex:1, paddingTop: 50, }}
                imageStyle={{transform: [{translateY: SIZES.height - SIZES.height * 1.125}], }}
                >
            <View style={{flex: 1.5, paddingHorizontal: 25, paddingVertical: 15, }}>
                <Text style={styles.headerLine1}>book an</Text>
                <Text style={styles.mainHeader}>experience</Text>
            </View>

        <View style={{height: SIZES.height * 0.45, borderTopStartRadius: 40, borderTopEndRadius: 40, overflow: 'hidden',  }}>
            <BlurView intesity={10} tint='light' style={{flex: 1, flexShrink: 'none', backgroundColor: 'rgba(255,255,255, 0.2)', paddingVertical: 50, }}>
                <View style={{ flex: 1, marginHorizontal: 25, }}>
                    <Text style={styles.titleHeader}>{Data.events[itemId].title}</Text>
                    <Text style={styles.h3}>{Data.events[itemId].location}</Text>
                    <View style={styles.spanBox}>
                        <Text style={styles.span}>{Data.events[itemId].attendees} Going</Text>
                    </View>
                </View>

            </BlurView>

                <LinearGradient 
                    colors={['rgba(255, 255, 255, 0.7)', 'transparent']} 
                    start={{x: 1, y: 1}}
                    end={{x: 1, y: 0}}
                    locations={[0.6, 1]}
                    style={{width: SIZES.width, justifyContent: 'flex-start', position: 'absolute', bottom: 0, paddingHorizontal: 25,  paddingTop: 130, paddingBottom: 50,}}>
                    <Text style={styles.paragraph}>{Data.events[itemId].description}</Text>
                    <View style={styles.span2}>
                        <Image 
                            source={images.gps_icon}
                            style={styles.spanIcon}
                            />
                        <Text style={styles.bold}>{Data.events[itemId].kmAway} from here</Text>
                    </View>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonValue}> Make a booking</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

        </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    headerLine1 : { 
        letterSpacing: 2, 
        fontSize: 36, 
        fontWeight: '300', 
        color: COLORS.secondary, 
        textShadowColor: 'rgba(0,0,0, 0.2)',
        textShadowRadius: 5,
    },
    mainHeader : {
        fontSize: 36, 
        fontWeight: '700', 
        color: COLORS.secondary, 
        display: 'flex',
        marginTop: -10,
        textShadowColor: 'rgba(0,0,0, 0.2)',
        textShadowRadius: 5,
    },
    primaryButton : { 
        width: SIZES.width - 80,
        height: 80,
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
        color: COLORS.secondary,  
    },
    titleHeader: {
        fontSize: 26,
        fontWeight: '700',
        paddingBottom: 5,
        color: COLORS.primary,
        flexWrap: 'nowrap', 
        flexShrink: 0,
    },
    h3: {
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 10,
        color: COLORS.primary,
    },
    spanBox: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 40,
        backgroundColor: COLORS.gray,
        color: COLORS.primary,
        position: 'absolute',
        right: 0,
    },
    span: {
        minWidth: '0%',
        fontSize: 14,
        fontWeight: '700',
    },
    span2: {
        //flex: 1,
        flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    spanIcon: {
        width: 25,
        height: 25,
        transform: [{ rotate: '-45deg' }],
        marginRight: 12,
    },
    paragraph: {
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 26,
        paddingBottom: 10,
        color: COLORS.primary,
    },
    bold: {
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 10,
        color: COLORS.primary,
    },
})


export default DetailScreen;
