import React from 'react';
import {List, Badge} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const Categories = ({categories}) => {

  const renderCategories = () => {
    return categories.map(cat => {
      return (
        <List.Item
          title={cat.name}
          titleStyle={styles.listItem}
          onPress={() => console.log('fadf')}
          left={() => <Badge style={styles.badgeStyle}>{cat.items}</Badge>}
       />
      )
    })
  };

  return (
    <List.Section>
        <List.Subheader style={styles.listHeader}>Categories</List.Subheader>
        {renderCategories()}
     </List.Section>
  )
};

const styles = StyleSheet.create({
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
  }
})