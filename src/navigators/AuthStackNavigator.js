import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// import {LoginScreen} from './src/screens/LoginScreen'
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { options } from '../screens/options';
import { FaceCamera } from '../screens/FaceCamera';



const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();


export function AuthStackNavigator() {

  return(
        <AuthStack.Navigator
            mode = {'modal'}
            screenOptions={{
                headerShown: false,
          }}>
              <AuthStack.Screen name="loginStack">
                {
                    () => (
                        <LoginStack.Navigator
                             mode={'card'} 
                             screenOptions = {{
                                headerShown : false,  
                             }}
                              
                        >
                            <LoginStack.Screen name = {"Login"} component = {LoginScreen} />
                        </LoginStack.Navigator>
                    )
                }
              </AuthStack.Screen>
            
            <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />

            <AuthStack.Screen name={'options'} component={options}/>

            <AuthStack.Screen name={'FaceCamera'} component={FaceCamera}/>
           
        </AuthStack.Navigator>
    );
}

