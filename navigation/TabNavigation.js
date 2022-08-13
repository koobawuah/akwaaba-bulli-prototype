import { Text} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { COLORS, } from "../constants"
import { FavoriteScreen, BookingScreen, ChatScreen, DetailScreen } from "../screens"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import StackNavigation from "./StackNavigation"
    
const Tabs = createBottomTabNavigator()

const TabNavigation = () => {

    return (
        <Tabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarStyle: { 
                    height: 90,
                    backgroundColor: COLORS.primary,
                    marginHorizontal: 25,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    borderRadius: 25,
                    position: 'absolute', 
                    bottom: 25, },
                tabBarLabelStyle: {
                    marginBottom: -10,
                },
                tabBarActiveTintColor: 'white',
            }}
        >
            <Tabs.Screen 
                name="Feed" 
                component={StackNavigation} 
                options={{
                    tabBarLabel: ({focused}) => (focused?<Text style={{color: 'white', marginBottom: -10, fontWeight: '700' }}>Feed</Text>:null),
                    tabBarIcon: ({size, color}) => <Feather name="home" size={size} color={color}/>,
                }} 
            />

            <Tabs.Screen 
                name="Favorites" 
                component={FavoriteScreen} 
                options={{
                    tabBarLabel: ({focused}) => (focused?<Text style={{color: 'white', marginBottom: -10, fontWeight: '700' }}>Favorites</Text>:null),
                    tabBarIcon: ({size, color}) => <Feather name="heart" size={size} color={color}/>,
                }} 
            />
            <Tabs.Screen 
                name="MyBookings" 
                component={DetailScreen} 
                options={{
                    tabBarLabel: ({focused}) => (focused?<Text style={{color: 'white', marginBottom: -10, fontWeight: '700' }}>Bookings</Text>:null),
                    tabBarIcon: ({size, color}) => <Feather name="calendar" size={size} color={color}/>,
                }} 
            />

            <Tabs.Screen 
                name="Chats" 
                component={ChatScreen} 
                options={{
                    tabBarLabel: ({focused}) => (focused?<Text style={{color: 'white', marginBottom: -10, fontWeight: '700' }}>Chats</Text>:null),
                    tabBarIcon: ({size, color}) => <Ionicons name="md-chatbubbles-outline" size={size} color={color}/>,
                }} 
            />
        
        </Tabs.Navigator>
    )

}


export default TabNavigation
