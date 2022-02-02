import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStackNavigation from './shop';
import CartStackNavigation from './cart-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BottomTabs = createBottomTabNavigator();

const AppNavigator = ()=>{
    return(
        <NavigationContainer  >
        <BottomTabs.Navigator inicitialRouteName='Shop' screenOptions={{
            headerShown:false,
            tabBarShowLabel:false
        }}>
            <BottomTabs.Screen 
            name='Shop' 
            component={ShopStackNavigation}
            option={{
            tabBarIcon:({focussed})=>(
                <Ionicons name="home-outline" size={20}/>
            )}}/>
            <BottomTabs.Screen name='Cart' component={CartStackNavigation}/>
        </BottomTabs.Navigator>
        </NavigationContainer>
        )
}

export default AppNavigator;