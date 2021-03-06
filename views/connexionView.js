import React from 'react';
import { Text, TextInput, Button, View, Alert } from 'react-native';

import Style from '../styles/stylesheet';

export default class ConnexionView extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  constructor(props) {
    super(props);
    this.state = {
      email_placeholder: 'Your email address',
      pwd_placeholder: 'Your password',
      email: '',
      password: '',
    };
  }

    handlePress = () => {
      // Check that the email address field has been filled in
      if (this.state.email === '') {
        Alert.alert(
          'Email address field is empty',
          'Please enter your email address',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
        return console.log('Email address field is empty');
      }
      // Check that the password field has been filled in
      else if (this.state.password === '') {
        Alert.alert(
          'Password field is empty',
          'Please enter your password',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
        return console.log('Password field is empty');
      }
      return console.log('OK');

    }

    render() {

      return (
        <View style={Style.container}>
          <Text style={Style.h5}>Enter your email address</Text>
          <TextInput
              style={Style.input}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder={this.state.email_placeholder}
              keyboardType="email-address"
              />
          <Text style={Style.h5}>Enter your password</Text>
          <TextInput
              style={Style.input}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder={this.state.pwd_placeholder}
              secureTextEntry
              />
          <Button
              onPress={() => this.handlePress()}
              title="Let's go!"
              color="#841584"
              accessibilityLabel="Valider la connexion"
                />
        </View>
      );
    }
}
