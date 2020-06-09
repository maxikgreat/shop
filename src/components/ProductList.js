import React from 'react';
import {View, Text} from 'react-native';

export const ProductList = ({route}) => {
  console.log(route.params.productList);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}