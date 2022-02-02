import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../categories';
import Products from '../../products';
import ProductDetails from '../../productdetails'
import { Platform } from 'react-native';
const Stack = createNativeStackNavigator();
import {COLORS} from '../../utils/data/color';

const ShopStackNavigation = ()=>{
    return(
      
            <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStylwwe:{
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary: '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerBackTitleStyle:{
                    fontWeight: 'bold',
                }

            }}>
                <Stack.Screen name="Categories" 
                component={Categories} 
                options={{ title:'Categorias'}}>
                </Stack.Screen>

                <Stack.Screen name="Products" 
                component={Products} 
                options={({ route }) => ({
                    title:route.params.name,
                    headerStyle:{
                        backgroundColor:route.params.color,
                    },
                })
                }>
                </Stack.Screen>

                <Stack.Screen name="ProductDetails" 
                component={ProductDetails}
                options={({ route }) => ({
                    title:route.params.name,
                    headerStyle:{
                        backgroundColor:route.params.color,
                    },
                    })
                    }>
                </Stack.Screen>

            </Stack.Navigator>

        )
}

export default ShopStackNavigation;