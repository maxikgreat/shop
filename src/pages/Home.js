import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {theme} from '../../theme';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
});
