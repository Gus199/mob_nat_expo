import React, { useState, useEffect } from 'react';
import {  StyleSheet,  ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import {Container,HStack,Text, Input, Icon,Icon as MaterialIcons,Box, View, Stack,FormControl,InputLeftElement } from 'native-base'

import ProductList from './ProductList';



const data = require('../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  return (<>
    <HStack>
 
   <Stack space={4} w="100%" alignItems="center">
   <Input w={{
  base: "98%%",
  md: "25%"
}} 
InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400"  />}
placeholder="Search" 
// onFocus={}
// onChange={() =>}
backgroundColor='gainsboro'
rounded={25}
/>
    </Stack>
    </HStack>
    
     <View style={styles.listCaintainer}>
 
    
        <FlatList
          //   horizontal
          numColumns={2}
          data={products}
          renderItem={({ item }) => <ProductList key={item.id} item={item} />}
          keyExtractor={(item) => item.name}
        />
    
    
   
     </View>
     
     </>
     
  );
};
const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  listCaintainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
export default ProductContainer;
