import React from 'react';
import { Button } from 'react-native';

export default class ConnexionInscriptionView extends React.Component {

    render() {

        onPress = () => {
            console.log('OK');
        }

        return (
            <Button
                onPress={this.onPress} 
                title="Connexion"
                color="#841584"
                alignItems="center"
                justifyContent="center"
                borderRadius="100"
                accessibilityLabel="Connexion au compte"
            /> 
        )
    }
}