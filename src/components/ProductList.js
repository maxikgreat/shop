import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {theme} from '../../theme';
import { ProductCard } from './ProductCard';
import {Sorter} from './Sorter';
import {Title, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.optContainer}>
        <Sorter />
        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.filterContainer}>
          <Icon name='filter' color={theme.colors.text} size={20} style={styles.filterIcon}/>
          <Title>Filter...</Title>
        </TouchableOpacity>
      </View>
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
  optContainer: {
    backgroundColor: theme.colors.primary,
    padding: 10
  },
  scroll: {
    paddingVertical: 20
  },
  filterContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterIcon: {
    marginRight: 10
  },
  divider: {
    height: 3,
    backgroundColor: theme.colors.accent,
    marginTop: 5
  }
})
