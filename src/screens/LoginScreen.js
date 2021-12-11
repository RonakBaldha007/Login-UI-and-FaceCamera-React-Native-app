import React from 'react';
import {View, StyleSheet} from 'react-native';

import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { TextButton } from '../components/TextButton';
import { Error } from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';



export function LoginScreen({navigation}) {

    const {login} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, stepassword] = React.useState('');

    return(
        <View style={styles.container}>
            <Heading style={styles.title}>LOG-IN</Heading>
            <Error error={''} />
            <Input
                style={styles.input} 
                placeholder={"ID"} 
                keyboardType={'email-address'} 
                value = {email}
                onChangeText= {setEmail}
            />
            <Input 
                style={styles.input} 
                placeholder={"Password"} 
                value = {password}
                onChangeText = {stepassword}
                secureTextEntry 
            />

            <FilledButton 
                title={'Login'}
                style={styles.loginbutton}
                onPress={() => {
                    
                    login(email,password);
                    navigation.navigate('options');
                    
                }}    
            />

            <TextButton title={'Have U an Account? Create One '} onPress={() => { navigation.navigate('Registration');}} /> 
        </View>
    );    
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding: 20,
        paddingTop : 120 ,
        alignItems : 'center',
    },

    title : {
        marginBottom : 32 ,
    },

    input : {
        marginVertical : 10,
    },

    loginbutton : {
        marginVertical : 28,
    },
});