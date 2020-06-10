
import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Card, Title, Paragraph, Button, Divider} from 'react-native-paper';
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
        rating.push(<Icon key={i} name='star' color='#fcdf4c' size={15}/>);
      } else {
        rating.push(<Icon key={i} name='star' color={theme.colors.primary} size={15}/>);
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
          <View style={{...styles.row, ...styles.rate}}>
            {renderRating()}
          </View>
          <Paragraph>{prod.desc.substring(0,80)}...</Paragraph>
        </Card.Content>
        <Divider style={styles.divider}/>
        <Card.Actions style={styles.cardBottom}>
          {
            prod.discount > 0
            ? <Title style={styles.price}>
                {(prod.price - (prod.price * (prod.discount / 100))).toString()}$
              </Title>
            : <Title style={styles.price}>{prod.price}$</Title>
          }
          <View style={styles.row}>
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
          </View>
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
  },
  price: {
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    height: 3,
    backgroundColor: theme.colors.primary
  },
  cardBottom: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  rate: {
    marginBottom: 5
  }
})