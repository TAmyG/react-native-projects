import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => {
        return {
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            borderTopColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, focused}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Chat':
                iconName = 'chatbox-ellipses-outline';
                break;
              case 'Contacts':
                iconName = 'people-outline';
                break;
              case 'Albums':
                iconName = 'albums-outline';
                break;
            }
            return <Icon name={iconName} size={22} color={color} />;
          },
        };
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

// tabBarPressColor: colors.primary,
//         tabBarShowIcon: false,
//         tabBarIndicatorStyle: {
//           backgroundColor: colors.primary,
//         },
