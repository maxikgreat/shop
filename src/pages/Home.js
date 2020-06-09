import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';
import {theme} from '../../theme';

export const Home = () => {


  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button>Click</Button>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
