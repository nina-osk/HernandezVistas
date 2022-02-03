import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartItem=({item, onDelete}) => {
  return (
 <View style={styles.container} >
   <View style={styles.header}>  
   <Text style={styles.title}>{item.name}</Text>
   </View>
            <View>
             <Text style={styles.sectionDetails}>$ {item.price}</Text>
             <Text style={styles.sectionDetails}>Cant:{item.quantity}</Text>
             </View>
        <TouchableOpacity 
        
            onPress={()=>onDelete(item.id)}>
              <Ionicons name="trash-outline" size={20} color="red"/>
        </TouchableOpacity>
        </View>
  );
};

export default CartItem;
