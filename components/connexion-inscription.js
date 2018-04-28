import React from 'react';
import { View, Text, Button } from 'react-native';

import ConnexionView from '../views/connexionView';
import InscriptionView from '../views/inscriptionView';

export default class ConnexionInscription extends React.Component {

    logIn = () => {
        return console.log('LOGIN OK');
    }

    signIn = () => {
        return console.log('SIGNIN OK');
    }

    render () {
        const navigation = this.props.navigation

        return (
            <View>
                <Button
                    onPress={() => navigation.navigate('Connexion')}
                    title="Connexion"
                    color="#841584"
                    accessibilityLabel="Se connecter au compte"
                /> 
                <Text />
                <Button
                    onPress={() => navigation.navigate('Inscription')}
                    title="Inscription"
                    color="#841584"
                    accessibilityLabel="S'inscire sur IdKdo"
                />
            </View>
        );

    };
}