import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FilledButton } from '../components/FilledButton';

export function options({navigation}) {
    return(
        <FilledButton 
        title={'Cemera'}
        style={styles.loginbutton}
        onPress={() => {
            navigation.navigate('FaceCamera');
        }}    
    />
    );
}


const styles = StyleSheet.create({
    loginbutton : {
        top : 50,
        alignItems : 'center',
        justifyContent : 'center',
        marginVertical : 28,
        backgroundColor : 'red',
        width : '100%' ,
    },
});