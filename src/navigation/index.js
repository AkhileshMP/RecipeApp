
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AddRecipeScreen from './AddRecipeScreen';
import FavouritesScreen from './FavouritesScreen';
import DetailsScreen from './DetailsScreen';
import { Colors, Icons, Constants } from './../common'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens()
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const AddStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
const FavouriteStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Stack.Screen name="Favourite" component={FavouritesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const Navigations = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = Icons.MaterialCommunityIcons.HomeOutLine;
            } else if (route.name === 'Add Recipe') {
              iconName = Icons.MaterialCommunityIcons.PlusOuterLine;
            } else {
              iconName = Icons.MaterialCommunityIcons.HeartOutLine;
            }

            // You can return any component that you like here!
            return (
              <View style={styles.iconView}>
                <Icon name={iconName} size={size} color={color} />
                <Text style={[styles.labelStyle, {color}]}>{route.name}</Text>
              </View>
            );
          },
        })}
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          activeTintColor: Colors.red,
          inactiveTintColor: Colors.gray,
        }}>
        <Tab.Screen name="Home" component={HomeStack} 
        options={{headerShown: false,}}/>
        <Tab.Screen name="Add Recipe" component={AddStack} 
        options={{headerShown: false,}}/>
        <Tab.Screen name="Favourite" component={FavouriteStack} 
        options={{headerShown: false,}}/>
      </Tab.Navigator>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
          <Stack.Screen name="Favourite" component={FavouritesScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
  const styles = StyleSheet.create({

    labelStyle: {
      fontFamily: Constants.fontFamily,
      fontSize: 11,
    },
    iconView: {
      alignItems: 'center'
    }

  })
  export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
  export default Navigations;