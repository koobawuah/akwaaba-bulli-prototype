import {createStackNavigator} from "@react-navigation/stack"
import { LoginScreen, HomeScreen, DetailScreen, } from "../screens"
import TabNavigation from "./TabNavigation";
//import StackNavigation from "./StackNavigation";

const Root = createStackNavigator();

const RootNavigation = () => {

    return(
        <Root.Navigator> 
            <Root.Screen name="Login" component={LoginScreen} options={{headerShown: false, }}/>
            <Root.Screen name="Dash" component={TabNavigation} options={{headerShown: false, }}/>
            <Root.Screen name="Home" component={HomeScreen} options={{headerShown: false,}} />
            <Root.Screen name="Details" component={DetailScreen} options={{headerShown: false,}} />
        </Root.Navigator>
    )
}

export default RootNavigation
