import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, Dimensions, View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import {COLORS, SIZES, Data, } from '../constants';
import { MenuItem, ListItem } from '../components';


const HomeScreen = ({navigation}) => {

    const [active, setActive] = useState(0)
    const { height } = Dimensions.get('window')
    
    const tabSelect = useCallback((i) => {
        setActive(i)
    }, [active])
    
    return (
        <View style={{flex: 1, marginTop: 50, backgroundColor: COLORS.secondary}}>

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
                    return (<TouchableOpacity onPress={ () => tabSelect(index) } key={index}>
                        <MenuItem icon={active === index?item.menuIcon:item.bwIcon} menu={item.menuTitle} active={active === index?true:false}/>
                    </TouchableOpacity>)
                    } 
                )}  
            </ScrollView>
        
            <View style={{flex:8, paddingBottom: 100,   }}>
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
                    ListEmptyComponent={
                        <View style={{
                            paddingTop: height / 8,
                            alignItems: "center",
                        }}>
                        <Text style={{ fontWeight: '700',}}> 
                            Sorry, nothing here 
                        </Text>
                        </View>
                    }
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
        display: 'flex',
        marginTop: -10,
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
