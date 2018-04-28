import React from 'react';
import { StackNavigator } from 'react-navigation';

import ConnexionInscriptionView from './views/connexionInscriptionView';
import ConnexionView from './views/connexionView';
import InscriptionView from './views/inscriptionView';

const GetConnected = new StackNavigator({
  Home: { screen: ConnexionInscriptionView, },
  Connexion: { screen: ConnexionView, },
  Inscription: { screen: InscriptionView, },
},{
  initialRouteName: 'Home',
});

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      user: null,
      getConnect: null
    }
  }

  componentWillUnmount = () => {
    // Vérifier les nouvelles valeurs de user et de getConnect
  }

  render() {

    return (
      <GetConnected />
    );
  };

}