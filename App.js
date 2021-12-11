import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { RegistrationScreen } from './src/screens/RegistrationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import { AuthContext } from './src/contexts/AuthContext';

const RootStack = createStackNavigator();

export default function () {

const auth = React.useMemo(
   ()=> ({

  login: (email, password) => {
    console.log('Login', email, password);
  },
  register: (email, password) => {
    console.log('register', email, password);
  },
}),

[],
);


return(
   <AuthContext.Provider value = {auth}>
    <NavigationContainer>
      <RootStack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

