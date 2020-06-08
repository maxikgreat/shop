import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, TextInput, HelperText, Switch, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {theme} from '../../theme';

export const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  
  return (
    <>
      <TextInput
        mode="outlined"
        dense={true}
        autoCorrect={false}
        contextMenuHidden={true}
        textContentType='emailAddress'
        style={styles.input}
        label='Email'
        placeholder='example@mail.com'
        onChangeText={text => setUser({...user, email: text})}
      />
      <TextInput
        mode="outlined"
        dense={true}
        autoCorrect={false}
        contextMenuHidden={true}
        textContentType='password'
        secureTextEntry={true}
        style={styles.input}
        label='Password'
        placeholder='min. 6 characters'
        onChangeText={text => setUser({...user, password: text})}
      />
      <TextInput
        mode="outlined"
        dense={true}
        autoCorrect={false}
        contextMenuHidden={true}
        textContentType='password'
        secureTextEntry={true}
        style={styles.input}
        label='Confirm password'
        placeholder='confirm password'
        onChangeText={text => setUser({...user, password: text})}
      />
      <Button
        mode="contained"
      >Sign Up</Button>
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    marginBottom: 20,
  }
});
