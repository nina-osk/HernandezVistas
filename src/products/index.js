import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';

import styles from './styles';

const Products=({navigation}) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
        <View
          style={styles.sectionTitle}>
        <Text>Products</Text>
        <Button title='Detalles' onPress={()=>navigation.navigate('ProductDetails')}></Button>
        </View>
    </SafeAreaView>
  );
};

export default Products;
