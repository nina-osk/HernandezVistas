import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryItem=({item, onSelected}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
          style={[styles.containerTouchable, {backgroundColor:item.color}]}
         onPress={()=>onSelected(item)}>
         <View>
             <Text style={styles.sectionTitle}>{item.title}</Text>
         </View>
        </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
