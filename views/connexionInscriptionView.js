import React from 'react';
import { View } from 'react-native';
import ConnexionInscription from '../components/connexion-inscription';

import Style from '../styles/stylesheet';

export default class ConnexionInscriptionView extends React.Component {

  static navigationOptions = { title: 'Welcome' };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logIn = () => console.log('LOGIN OK');

  signIn = () => console.log('SIGNIN OK');

  render() {
    return (
      <View style={Style.container}>
        <ConnexionInscription navigation={this.props.navigation} />
      </View>
    );
  }
}
