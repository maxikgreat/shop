
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomSnackbar} from './components/CustomSnackbar';
import { ShopNavigation } from './pages';
import {theme} from '../theme';
import { Auth } from './pages/Auth';
import {ShoppingCart} from './pages/ShoppingCart';
import {useAuth} from './hooks/useAuth';
import {useShop} from './hooks/useShop';
import {useSelector} from 'react-redux';

const RootNavigator = createStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.text,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export const App = () => {
  const user = useSelector(state => state.user);
  const {autoAuth, loading} = useAuth();
  const {fetchList, fetchShoppingCart} = useShop();

  useEffect(() => {
    fetchShoppingCart();
    fetchList();
    if (!user.logged) {
      autoAuth();
    }
  }, []);
  return (
    <>
      {
        loading
        ? <View style={styles.container}>
            <ActivityIndicator size='large' color={theme.colors.primary} />
          </View>
        : <RootNavigator.Navigator mode='card'>
            <RootNavigator.Screen
              name='Shop'
              component={ShopNavigation}
              options={headerStyle}
            />
            <RootNavigator.Screen
              name='Auth'
              component={Auth}
              options={headerStyle}
            />
            <RootNavigator.Screen
              name='ShoppingCart'
              component={ShoppingCart}
              options={headerStyle}
            />
          </RootNavigator.Navigator>
      }
      <CustomSnackbar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  }
});

