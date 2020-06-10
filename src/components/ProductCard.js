
import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {theme} from '../../theme';
import altImage from '../assets/images/no-image.png';
import discountImage from '../assets/images/discount.png';
import {MAX_RATE} from '../consts';
import Icon from 'react-native-vector-icons/Entypo';

export const ProductCard = ({prod}) => {

  const renderRating = () => {
    const rating = [];
    for (let i = 0; i < MAX_RATE; i++) {
      if (prod.rating > i) {
        rating.push(<Icon name='star' color='#fcdf4c' size={20}/>);
      } else {
        rating.push(<Icon name='star' color={theme.colors.primary} size={20}/>);
      }
    }
    return rating;
  }

  return (
      <Card style={styles.cardContainer}>
        <Card.Cover 
          source={prod.img ? { uri: prod.img } : altImage}
        />
        {
          prod.discount > 0
          ? <Image source={discountImage} style={styles.image}/>
          : null
        }
        <Card.Content>
          <Title><Text style={styles.specText}>{prod.vendor}</Text> | {prod.model}</Title>
          <Paragraph>{prod.desc.substring(0,80)}...</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            style={styles.button}
            mode="contained"
            color={theme.colors.primary}
            //onPress={() => navigation.goBack()}
          >More
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            color={theme.colors.error}
            //onPress={() => navigation.goBack()}
          >Add to cart
          </Button>
          {renderRating()}
        </Card.Actions>
      </Card>
  )
};


const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: theme.colors.accent
  },
  button: {
    marginRight: 10
  },
  specText: {
    fontWeight: 'bold'
  },
  image: {
    position: 'absolute',
    width: 80,
    height: 80,
    resizeMode: 'stretch'
  }
})