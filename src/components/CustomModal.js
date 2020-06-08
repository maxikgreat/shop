import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Title, Paragraph} from 'react-native-paper';
import {theme} from '../../theme';

export const CustomModal = () => {
  //const {title, body, acceptAction} = route.params;

  // const onAcceptAction = () => {
  //   acceptAction();
  //   navigation.goBack();
  // };

  return (
    <View style={styles.container}>
      {/* <Title style={styles.title}>{title}</Title> */}
      {/* <Paragraph style={styles.body}>{body}</Paragraph> */}
      <View style={styles.buttonsContainer}>
      <Button
        style={styles.button}
        mode="contained"
        color={theme.colors.error}
				//onPress={() => navigation.goBack()}
			>Cancel
      </Button>
      <Button
        style={styles.button}
        mode="contained"
				//onPress={() => onAcceptAction()}
			>OK
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 30,
  },
  body: {
    padding: 30,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  button: {
    margin: 5
  }
});
