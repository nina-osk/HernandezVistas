import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../cart'
import { Platform } from 'react-native';
const Stack = createNativeStackNavigator();
import {COLORS} from '../../utils/data/color';

const CartStackNavigation = ()=>{
    return(
 
            <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary: '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerBackTitleStyle:{
                    fontWeight: 'bold',
                }

            }}>
                <Stack.Screen name="Cart" 
                component={Cart} >
                </Stack.Screen>

        
            </Stack.Navigator>

        )
}

export default CartStackNavigation;