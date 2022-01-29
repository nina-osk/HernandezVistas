import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';

import styles from './styles';

const Categories =({navigation})=>{

const handleSelectedCategory=(item)=>{
navigation.navigate('Products',{categoryId:item.id, name:item.title})
}
const renderCategories=()=>{


}
  return (
    <SafeAreaView style={styles.sectionContainer}>
        <View  style={styles.sectionTitle}>
        <Text>Categorias!!</Text>
        <Button title="Productos" onPress={() => navigation.navigate('Products')}></Button>
        </View>
    </SafeAreaView>
  );
};



export default Categories;
