import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';


const ProductDetails=({navigation, route}) => {
  const {product}=route.params;
  return (
    <SafeAreaView style={styles.container}>
        <View      style={styles.container}>
        <Text style={styles.sectionTitle}>{product.name}</Text>
        <Text style={styles.sectionTitle}>{product.description}</Text>
        <Text style={styles.sectionTitle}>{product.price}</Text>
      
        </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
