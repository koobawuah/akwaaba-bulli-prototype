import {createStackNavigator} from "@react-navigation/stack"
import { LoginScreen } from "../screens"
import TabNavigation from "./TabNavigation";

const Root = createStackNavigator();

const RootNavigation = () => {

    return(
        <Root.Navigator> 
            <Root.Screen name="Login" component={LoginScreen} options={{headerShown: false, }}/>
            <Root.Screen name="Dash" component={TabNavigation} options={{headerShown: false, }}/>
        </Root.Navigator>
    )
}

export default RootNavigation
