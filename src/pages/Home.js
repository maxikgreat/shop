import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import {theme} from '../../theme';
import {useSelector} from 'react-redux';
import {Categories} from '../components/Categories';
import {useShop} from '../hooks/useShop';

export const Home = () => {
  const shop = useSelector(state => state.shop);
  const {getCategories} = useShop();
  
  return (
    <View style={styles.container}>
      {
        shop.loading
        ? <ActivityIndicator />
        : <>
            <Categories categories={getCategories()}/>
          </>
      }
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
});
