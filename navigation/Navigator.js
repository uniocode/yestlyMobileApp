import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import LoginScreen from '../source/screens/loginScreens/LoginScreen'
import HomeScreen from '../source/screens/bodyScreens/HomeScreen'
import FavoritesScreen from '../source/screens/bodyScreens/FavoritesScreen'


const Navigator = () => {


    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()
    const Drawer = createDrawerNavigator()

    const LoginStackNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    }

    const HomeStackNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            </Stack.Navigator>
        )
    }

    const FavoritesStackNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="FavoritesScreen" component={FavoritesScreen}/>
            </Stack.Navigator>
        )
    }

    const DrawerNav = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='HomeDrawer' component={HomeStackNav}/>
            </Drawer.Navigator>
        )
    }

    const BottomTabNav = () => {
       return (
        <Tab.Navigator>
        <Tab.Screen name='HomeTab' component={DrawerNav}/>
        <Tab.Screen name='Favorites' component={FavoritesStackNav}/>
    </Tab.Navigator>
       )
    }





    return ( 
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='LoginStack' component={LoginStackNav} options={{headerShown: false}}/>
        <Stack.Screen name='BodyStack' component={BottomTabNav}/>
    </Stack.Navigator>
</NavigationContainer>
     );
}
 
export default Navigator;