import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {theme} from '../../theme';
import { ProductCard } from './ProductCard';

export const ProductList = ({route}) => {

  const renderProducts = () => {
    return route.params.productList.map(prod => (
      <ProductCard
        key={prod.model}
        prod={prod}
      />
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {renderProducts()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  scroll: {
    paddingVertical: 20
  }
})
