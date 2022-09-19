import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodForm from '../foodForm';
import FoodList from '../foodList';

import configureStore from '../store';
import { Provider } from 'react-redux';


const store = configureStore();

const Stack = createNativeStackNavigator();
const StackScreen = () => {


    return (
       <Provider store={store} >
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'Cheetah Coding',
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>

    );
  }

 export default StackScreen;