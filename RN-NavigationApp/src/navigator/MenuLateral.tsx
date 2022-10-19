import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home', headerShown: false}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings', headerShown: false}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}) => {
  return (
    <DrawerContentScrollView>
      {/**Avatar */}
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('./logo-og.png')} />
      </View>

      {/**Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
