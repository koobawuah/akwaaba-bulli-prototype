import { createStackNavigator } from "@react-navigation/stack"
import {HomeScreen, DetailScreen} from "../screens"
    
const Stack = createStackNavigator()

const StackNavigation = () => {
     
    return (
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigation
