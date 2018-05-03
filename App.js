import React from 'react';
import { StackNavigator } from 'react-navigation';

import ConnexionInscriptionView from './views/connexionInscriptionView';
import ConnexionView from './views/connexionView';
import InscriptionView from './views/inscriptionView';
import MyListView from './views/myListView';
import SplashScreenView from './views/splashScreen';

const GetConnected = new StackNavigator({
  Home: { screen: ConnexionInscriptionView, },
  Connexion: { screen: ConnexionView, },
  Inscription: { screen: InscriptionView, },
  List: { screen: MyListView },
  SplashScreen: { screen: SplashScreenView },
},{
  initialRouteName: 'Home',
});

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      user: null,
      getConnect: null,
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