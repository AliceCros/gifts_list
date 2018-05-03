import React from 'react';
import { StackNavigator } from 'react-navigation';

import ConnexionInscriptionView from './views/connexionInscriptionView';
import ConnexionView from './views/connexionView';
import InscriptionView from './views/inscriptionView';
import SplashScreenView from './views/splashScreenView'


const GetConnected = new StackNavigator({
  Home: { screen: ConnexionInscriptionView, },
  Connexion: { screen: ConnexionView, },
  Inscription: { screen: InscriptionView, },
  SplashScreen:{screen: SplashScreenView},
  
},{
  initialRouteName: 'SplashScreen',
});
export default class App extends React.Component {

  constructor(props){
    super(props)
    this.navigate  = props.navigation
    this.state = {
      user: null,
      getConnect: null
    }
  }

  render() {
    const myNavScreen = this.props.navigation;
    setInterval(()=>{
      myNavScreen.navigate('Home');
     }, 3000);
    return (
      <GetConnected/>

    );
  };

}