import React, {useState} from 'react';
import {Title, Paragraph, Button, DataTable, Badge} from 'react-native-paper';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {theme} from '../../theme';
import altImage from '../assets/images/no-image.png';
import discountImage from '../assets/images/discount.png';
import Icon from 'react-native-vector-icons/Entypo';
import {MAX_RATE} from '../consts';

export const Product = ({route}) => {
  const prod = route.params.prod;

  const [desc, setDesc] = useState(true);

  const renderCharacteristics = () => {
    return Object.keys(prod.stats).map(stat => {
      return (
        <DataTable.Row>
          <DataTable.Cell>{stat}</DataTable.Cell>
          <DataTable.Cell>{prod.stats[stat]}</DataTable.Cell>
        </DataTable.Row>
      )
    })
  }

  const renderRating = () => {
    const rating = [];
    for (let i = 0; i < MAX_RATE; i++) {
      if (prod.rating > i) {
        rating.push(<Icon key={i} name='star' color='#fcdf4c' size={20} />);
      } else {
        rating.push(<Icon key={i} name='star' color={theme.colors.primary} size={20} />);
      }
    }
    return rating;
  }

  return ( 
    <View style={styles.container}>
      <Image source={prod.img ? { uri: prod.img } : altImage} style={styles.img}/>
      {
        prod.discount > 0
        ? <Image source={discountImage} style={styles.discImage}/>
        : null
      }
      <View style={styles.wrapper}>
        <View style={styles.vendorModelContainer}>
          <Title style={{...styles.headerText, ...styles.specText}}>{prod.vendor} | </Title>
          <Title style={styles.headerText}>{prod.model}</Title>
        </View>
        <View style={styles.withPriceContainer}>
            <View style={{flex: 0.7}}>
              {
                  prod.garancy > 0
                  ? <Paragraph style={styles.guarantee}>Guarantee {prod.garancy} monthes</Paragraph>
                  : <Paragraph style={styles.guarantee}>No Guarantee</Paragraph>
              }
              <View style={styles.stars}>
                <Paragraph style={styles.starsText}>Rating: </Paragraph>{renderRating()}
              </View>
            </View>
            <View style={{flex: 0.3}}>
              <Title style={styles.price}>{prod.discountPrice}$</Title>
              {
                prod.discount
                ? <Badge style={styles.discount}>-{prod.discount}%</Badge>
                : null
              }
            </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.optButton}
            mode={desc ? 'contained' : 'outlined'}
            onPress={() => setDesc(true)}
          >Description</Button>
          <Button
            style={styles.optButton}
            mode={!desc ? 'contained' : 'outlined'}
            onPress={() => setDesc(false)}
          >Characteristics</Button>
        </View>
        <ScrollView style={styles.scroll}>
          {
            desc
            ? <Paragraph style={styles.desc}>{prod.desc}</Paragraph>
            : <DataTable>
                {renderCharacteristics()}
              </DataTable>
          }
        </ScrollView>
      </View>
      <Button
          mode='contained' 
          icon='cart'  
          color={theme.colors.error} 
          style={styles.buyButton}
          contentStyle={{height: 50}}
          labelStyle={{fontSize: 20, fontWeight: 'bold'}}
        >Add to cart</Button>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  wrapper: {
    padding: 10,
  },
  img: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain'
  },
  vendorModelContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30,
  },
  specText: {
    fontWeight: 'bold'
  },
  discImage: {
    position: 'absolute',
    width: 90,
    height: 90,
    resizeMode: 'stretch'
  },
  guarantee: {
    fontSize: 20
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
  },
  starsText: {
    fontSize: 20
  },
  buyButton: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
  },
  desc: {
    fontSize: 16,
    padding: 5
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  optButton: {
    width: '50%'
  },
  scroll: {
    height: '28%'
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  discount: {
    position: 'absolute',
    fontSize: 15,
    top: '-40%',
    right: '20%'
  },
  withPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})