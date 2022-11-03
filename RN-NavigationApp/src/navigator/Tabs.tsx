import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsAndroid /> : <TabsAndroid />;
};
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => {
        return {
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            borderTopColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color, focused, size}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'bandage-outline';
                break;
              case 'Tab2Screen':
                iconName = 'basketball-outline';
                break;
              case 'StackNavigator':
                iconName = 'bookmarks-outline';
                break;
            }
            return <Icon name={iconName} size={22} color={color} />;
          },
        };
      }}>
      <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" component={TopTabNavigator} />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
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
          tabBarIcon: ({color, focused, size}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'bandage-outline';
                break;
              case 'Tab2Screen':
                iconName = 'basketball-outline';
                break;
              case 'StackNavigator':
                iconName = 'bookmarks-outline';
                break;
            }
            return <Icon name={iconName} size={22} color={color} />;
          },
        };
      }}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          headerShown: false,
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{headerShown: false}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{headerShown: false}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
