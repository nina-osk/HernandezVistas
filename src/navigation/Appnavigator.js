import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../categories/index';
import Products from '../products/index';
import ProductDetail from '../productdetails/index';
const Stack = createNativeStackNavigator();

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
                <Stack.Screen name="Products" component={Products}></Stack.Screen>
                <Stack.Screen name="ProductDetails" component={ProductDetail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>)
}

export default AppNavigator;