import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Title, Button, Paragraph} from 'react-native-paper';
import {theme} from '../../theme';
import {useSelector} from 'react-redux';
import {useShop} from '../hooks/useShop';
import {Rate} from '../components/Rate';
import noImage from '../assets/images/no-image.png';

export const Purchases = () => {
  const user = useSelector(state => state.user);
  const {rateItem} = useShop();
  const [rating, setRating] = useState(false);

  const renderItems = () => {
    return Object.keys(user.history).map(item => {
      return (
          <View style={styles.card} key={item}>
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={user.history[item].item.img ? {uri: user.history[item].item.img} : noImage}
              />
            </View>
            <View style={styles.content}>
              <Title style={{color: theme.colors.text}}>{user.history[item].item.vendor} | {user.history[item].item.model}</Title>
              <Paragraph>{user.history[item].item.category} | {user.history[item].item.discountPrice}$</Paragraph>
              <Button
                mode='contained'
                onPress={() => setRating(true)}
              >Rate</Button>
            </View>
          </View>
      )
    })
  }

  return (
    <View style={styles.container}>
      <Rate visible={rating} setVisible={setRating}/>
      <View style={styles.header}>
        <Title style={styles.headerTitle}>Your purchases</Title>
      </View>
      <ScrollView style={styles.items}>
        {
          user.history
          ? renderItems()
          : <Title>You have no any purchases yet</Title>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 10
  },
  header: {
    flex: 0.1,
  },
  items: {
    flex: 0.9,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  card: {
    margin: 5,
    backgroundColor: theme.colors.accent,
    flexDirection: 'row',
    flex: 1,
    minHeight: 100,
    alignItems: 'center'
  },
  imageContainer: {
    flex: 0.35,
  },
  content: {
    flex: 0.65,
    padding: 3
  },
  image: {
    width: '99%',
    height: '99%',
    resizeMode: 'contain'
  }

})