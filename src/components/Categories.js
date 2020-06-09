import React from 'react';
import {List, Badge, Divider} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../theme';
import {useShop} from '../hooks/useShop';

export const Categories = ({navigation}) => {
  const {
    getCategories, 
    getAllItems,
    getItemsByCategory
  } = useShop();

  const renderCategories = () => {
    return getCategories().map(cat => {
      return (
        <>
          <Divider style={styles.divider}/>
            <List.Item
              title={cat.name}
              titleStyle={styles.listItem}
              onPress={() => navigation.navigate('ProductList',{
                productList: getItemsByCategory(cat.name)
              })}
              left={() => <Badge style={styles.badgeStyle}>{cat.items}</Badge>}
          />
       </>
      )
    })
  };

  return (
    <View style={styles.container}>
      <List.Section>
          <List.Subheader style={styles.listHeader}>Categories</List.Subheader>
          {renderCategories()}
          <Divider style={styles.divider}/>
          <Divider style={{...styles.divider, marginTop: 30 }}/>
          <List.Item
            title='All products'
            titleStyle={styles.listItem}
            onPress={() => navigation.navigate('ProductList', {
              productList: getAllItems()
            })}
            left={() => <Badge style={styles.badgeStyle}>{getAllItems().length}</Badge>}
          />
          <Divider style={styles.divider}/>
      </List.Section>
     </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  listHeader: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  listItem: {
    fontSize: 25
  },
  badgeStyle: {
    fontSize: 14
  },
  divider: {
    height: 3,
    backgroundColor: theme.colors.primary
  }
})