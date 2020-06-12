import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Portal, Modal, Button} from 'react-native-paper';
import {theme} from '../../theme';
import {MAX_RATE} from '../consts';
import Icon from 'react-native-vector-icons/Entypo';

export const Rate = ({visible, setVisible}) => {

  const renderRating = () => {
    const rating = [];
    for (let i = 0; i < MAX_RATE; i++) {
      rating.push(<Icon key={i} name='star' color={theme.colors.background} size={25} />);
    }
    return rating;
  }

  return (
    <Portal>
      <Modal 
        contentContainerStyle={styles.modal} 
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        <View style={styles.container}>
          {renderRating()}
        </View>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '80%',
    height: '45%',
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    padding: 20,
  },
})