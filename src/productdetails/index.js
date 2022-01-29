import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';


const ProductDetails=() => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
        <View
          style={styles.sectionTitle}>
        <Text>ProductDetails!!</Text>
        </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
