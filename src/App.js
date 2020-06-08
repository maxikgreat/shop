
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomModal} from './components/CustomModal';
import { ShopNavigation } from './pages';
import {theme} from '../theme';
import { Auth } from './pages/Auth';

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

const App = () => {
  return (
    <RootNavigator.Navigator mode='card'>
      <RootNavigator.Screen
        name='Shop'
        component={ShopNavigation}
        options={headerStyle}
      />
      <RootNavigator.Screen
        name='Modal'
        component={CustomModal}
        options={{headerShown: false}}
      />
      <RootNavigator.Screen
        name='Auth'
        component={Auth}
        options={headerStyle}
      />
    </RootNavigator.Navigator>
  );
};

export default App;
