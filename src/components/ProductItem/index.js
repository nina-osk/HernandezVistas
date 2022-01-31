import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ProductItem=({item, onSelected}) => {
  return (
 <View>
        <TouchableOpacity 
          style={styles.container}
            onPress={()=>onSelected(item)}>
              <View style={styles.container}>
            <View>
             <Text style={styles.title}>{item.name}</Text>
             </View>
             <View>
             <Text style={styles.sectionDetails}>$ {item.price}</Text>
             <Text style={styles.sectionDetails}>{item.weight}</Text>
             </View>
             </View>
        </TouchableOpacity>
        </View>
  );
};

export default ProductItem;
