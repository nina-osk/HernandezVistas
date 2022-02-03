import React from "react";
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import {CART} from '../utils/data/cart';
import CartItem from '../components/CartItem'

const Cart=()=>{
    const items= CART;
    const total=items.reduce((acc,items)=>acc+items.price*items.quantity,0);
    const handleDelete=()=>{
        console.warn("Eliminar item", id);
    }
    const handleConfirm=()=>{
        console.warn("Confirmar compra");
    }

    const renderItems=(data)=>{
    <CartItem item={data.item} onDelete={handleDelete(data.item.id)} />
    }

    return (
        <View style={styles.container}>
              <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItems}
                keyExtractor={(item)=> item.id}>
                </FlatList>
                </View>
        <View style={styles.footer} >
            <TouchableOpacity onPress={handleConfirm}>

            </TouchableOpacity>
   
        </View>
        </View>
    )
}; 

export default Cart;