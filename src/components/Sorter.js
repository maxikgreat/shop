import React from 'react';
import {RadioButton, Title} from 'react-native-paper';
import {StyleSheet, ScrollView, View} from 'react-native';
import {SORTS} from '../consts';
import {theme} from '../../theme';

export const Sorter = () => {

  const renderSorts = () => {
    return SORTS.map(sort => (
      <View style={styles.item}>
        <RadioButton value={sort} />
        <Title style={{marginRight: 15}}>{sort}</Title>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sort by</Title>
      <RadioButton.Group
        //onValueChange={value => this.setState({ value })}
        value={SORTS[0]}
      >
        <ScrollView horizontal contentContainerStyle={styles.container}>
          {renderSorts()}
        </ScrollView>
      </RadioButton.Group>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginRight: 15,
  },
  item: {
    flexDirection: 'row',
    marginRight: 10,
    borderWidth: 2,
    borderColor: theme.colors.accent,
    borderRadius: 20,
  }
})