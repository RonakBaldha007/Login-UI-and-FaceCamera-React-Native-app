import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { IconButton } from '../components/IconButton';
import { Error } from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';



export function RegistrationScreen() {
    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, stepassword] = React.useState('');

    return(
        <View style={styles.container}>
            <Heading style={styles.title}>REGISTRATION</Heading>
            {/* <IconButton name={"close-circle-outline"} /> */}
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
                title={'Register'}  
                style={styles.loginbutton}
                onPress={() => {
                    register(email, password);
                }}    
            />

           
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