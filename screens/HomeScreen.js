import { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import {COLORS, SIZES, Data, } from '../constants';
import { MenuItem, ListItem } from '../components';


const HomeScreen = ({navigation}) => {

    const [active, setActive] = useState(0)
    
    return (
        <View style={{flex: 1, marginTop: 50,  backgroundColor: COLORS.secondary}}>

            <View style={{flex: 1.5, paddingHorizontal: 25, paddingVertical: 15, }}>
                <Text style={styles.headerLine1}>for the love 
                </Text>
                <Text style={styles.mainHeader}>of Accra</Text>
            </View>

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.menu}>
                {Data?.menu.map( (item, index) => { 
                    return (<TouchableOpacity onPress={ () => setActive(index) } key={index}>
                        <MenuItem icon={active ===index?item.menuIcon:item.bwIcon} menu={item.menuTitle} active={active === index?true:false}/>
                    </TouchableOpacity>)
                    } 
                )}  
            </ScrollView>
        
            <View style={{flex:8, paddingBottom: 100, marginVertical: -5,  }}>
                <FlatList 
                    data={Data.events}
                    renderItem={ ({item, index}) =>
                        (
                        <TouchableOpacity 
                            onPress={() => {  navigation.navigate('Details', {itemId: index } )} } 
                            key={index}> 
                                <ListItem title={item.title} backgroundImage={item.eventImage}/> 
                        </TouchableOpacity> 
                        )
                    }
                    ListEmptyComponent={<Text> Sorry, nothing here </Text>}
                    />
            </View>

        </View>
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
    menu : { 
        flex: 1,
        marginHorizontal: 12,
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

export default HomeScreen;
