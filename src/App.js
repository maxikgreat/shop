
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomModal} from './components/CustomModal';
import { ShopNavigation } from './pages';
import {theme} from '../theme';

const RootNavigator = createStackNavigator();

const App = () => {
  return (
    <RootNavigator.Navigator mode='card'>
      <RootNavigator.Screen
        name='Shop'
        component={ShopNavigation}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <RootNavigator.Screen
        name='Modal'
        component={CustomModal}
        options={{headerShown: false}}
      />
    </RootNavigator.Navigator>
  );
};

export default App;
