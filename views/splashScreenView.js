import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Style from '../styles/stylesheet'


export default class SplashScreen extends React.Component{
   
    render(){

        return(
            <View Style={Style.container}>
         
            <Image style={{
                    alignSelf:'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 300,
                    width: 300,
                    top:200,
                    borderWidth: 1,
                    borderRadius: 150
                    }}source={require('../res/images/idkdologo.png')} /> 
            </View>
        );
    };   
}


