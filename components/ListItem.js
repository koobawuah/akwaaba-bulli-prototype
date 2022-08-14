import { View, ImageBackground, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../constants';
import Feather from 'react-native-vector-icons/Feather';

const ListItem = ({backgroundImage, title}) => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                resizeMode='cover'
                style={styles.bgImage}
                imageStyle={{
                    borderRadius: 30,
                }}
                >
                <TouchableOpacity>
                <Feather name='heart' size={20} color={COLORS.secondary} style={{alignSelf: 'flex-end', paddingRight: 20, }}/>
                </TouchableOpacity> 
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        width: SIZES.width - 50,
        flexDirection: 'column',
        marginHorizontal: 25,
    },
    bgImage: {
        width: '100%',
        height: 210,
        justifyContent: 'space-between',
        paddingVertical: 15,
        marginVertical: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        paddingLeft: 20,
        paddingBottom: 15,
        textShadowColor: COLORS.primary
    },
})

export default ListItem;
