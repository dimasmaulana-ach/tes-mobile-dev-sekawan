import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  ListData,
  Login,
  Splash,
  ListDetails,
  Portofolio,
  Language,
  ListDataUsers,
  ListDetailsUsers
} from '~screens';
import TabNavigators from './bottomTabs';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
          animation: 'slide_from_right',
          animationDuration: 200,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feature" component={TabNavigators} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListData" component={ListData} />
        <Stack.Screen name="ListDataUsers" component={ListDataUsers} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
        <Stack.Screen name="ListDetailsUsers" component={ListDetailsUsers} />
        <Stack.Screen name="Portofolio" component={Portofolio} />
        <Stack.Screen name="Language" component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
