import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';
import ProductsItem from '../components/ProductItem';
import {BREADS} from '../utils/data/bread';
import styles from './styles';

const Products =({navigation, route})=>{
const breads = BREADS.filter(breads => breads.category===route.params.categoryId);

const handleSelectedProduct=(item)=>{
navigation.navigate('ProductsDetails',
  {productId:item.id, 
   name:item.name,
   product:item
     }
   )
}

const renderProducts=({item, onSelected})=>{
return(
  <ProductsItem item={item} onSelected={handleSelectedProduct}>
  </ProductsItem>
)
}

  return (
    <SafeAreaView style={styles.sectionContainer}>
        <View  style={styles.sectionContainer}>
         <FlatList
         data={breads}
         renderItem={renderProducts}
         keyExtractor={item=>item.id}/>
        </View>
    </SafeAreaView>
  );
};



export default Products;
