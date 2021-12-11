import React, { useState, useEffect, useRef } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Image} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';


export function FaceCamera() {
const canRef = useRef(null);
const [type, setType] = useState(Camera.Constants.Type.back);
const [hasPermission, setHaspermission] = useState(null);
const [capturedPhoto, setcapturedPhoto] = useState(null); 
const [open, setOpen] = useState(false); 

useEffect(() => {
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHaspermission(status === 'granted');
    })();


}, []);

if(hasPermission === null)
{
    return <View />
}

if(hasPermission === false)
{
    return <Text> access granted ! </Text>
}

async function takePicture() {
    if(canRef){
        const data = await canRef.current.takePictureAsync();
        setcapturedPhoto(data.uri);
        setOpen(true);
        console.log(data);
    }
}
return(
       <SafeAreaView style={styles.container}>
           <Camera 
            style= {{flex : 1}}
            type= {type}
            ref = {canRef}
           >

            <View style={{flex :1 , backgroundColor: 'transparent', flexDirection : 'row'}}>
            <TouchableOpacity
                style= {{
                    position: 'absolute',
                    bottom : 20,
                    left : 20,
                }}
                onPress= { () => {
                    setType(
                        type === Camera.Constants.Type.back 
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                }}
            >
            <Text style = {{ fontSize : 20, marginBottom : 13, color :'#FFF'}}> FLIP </Text>
            </TouchableOpacity>    
        </View>
        </Camera>

        <TouchableOpacity style={styles.button} onPress={takePicture}>
                <FontAwesome name="camera" size={23} color="#FFF" />
        </TouchableOpacity>
                
        { capturedPhoto &&  
            <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            >
            <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', margin: 20 }}>
                <TouchableOpacity style={{margin : 10}} onPress={() => setOpen(false) }>
                     <FontAwesome name="window-close" size={50} color="#FF0000"/>
                </TouchableOpacity>

                <Image
                    style={{width: '100%', height:'100%', borderRadius: 20}}
                    source= {{uri: capturedPhoto}}
                />


            </View>
            
            </Modal>
       
        }

       </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        
        justifyContent : 'center',
        
    },
    button : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#121212',
        margin : 20,
        borderRadius : 10,
        height : 50,
    },  
});