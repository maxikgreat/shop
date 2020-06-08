import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, TextInput, HelperText} from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {

  const {auth} = useAuth();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const loginHandler = () => {
    auth(user.email, user.password);
  };
  
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
      <Button
        mode="contained"
        onPress={loginHandler}
      >Log In</Button>
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    marginBottom: 20,
  },
});
