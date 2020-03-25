import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import { Dashboard, Notifications, Settings, Other } from '../screens';

//---

const DashboardStack = createStackNavigator();

function DashboardContainer() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name='Dashboard' component={Dashboard} />
      <DashboardStack.Screen name='Other' component={Other} />
    </DashboardStack.Navigator>
  )
}

//---

const NotificationsStack = createStackNavigator();

function NotificationsContainer() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen name='Notifications' component={Notifications} />
      <NotificationsStack.Screen name='Other' component={Other} />
    </NotificationsStack.Navigator>
  )
}

//---

const SettingsStack = createStackNavigator();

function SettingsContainer() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={Settings} />
      <SettingsStack.Screen name='Other' component={Other} />
    </SettingsStack.Navigator>
  )
}

//---

const DrawerContainer = createDrawerNavigator();

function DrawerMenu() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 200]
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10]
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#AAA' }}>
      <DrawerContainer.Navigator
        drawerType='slide'
        overlayColor='transparent'
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
        drawerStyle={{
          width: '50%',
          backgroundColor: 'transparent'
        }}
        sceneContainerStyle={{
          transform: [{ scale, translateX }],
          borderRadius,
          overflow: 'hidden'
        }}
      >
        <DrawerContainer.Screen name='Dashboard' component={DashboardContainer} />
        <DrawerContainer.Screen name='Notifications' component={NotificationsContainer} />
        <DrawerContainer.Screen name='Settings' component={SettingsContainer} />
      </DrawerContainer.Navigator>
    </View>
  )
}

//---

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  )
}