import React from 'react';
import { Text, View } from 'react-native';

import LaunchView from './views/launchView';
import ConnexionInscriptionView from './views/connexionInscriptionView';
import Style from './styles/stylesheet';

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.container}> 
        {/*<LaunchView />*/}
        <ConnexionInscriptionView /> 
      </View>
    );
  }
}