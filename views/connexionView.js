import React from 'react';
import { Text, TextInput, Button, View, Alert, ActivityIndicator } from 'react-native';
import EmailValidator from 'email-validator';

import ListView from './myListView';
import Style from '../styles/stylesheet';

export default class ConnexionView extends React.Component {

  static navigationOptions = {
    title: 'Sign in',
  };

  constructor(props) {
    super(props);
    this.state = {
      email_placeholder: 'Your email address',
      pwd_placeholder: 'Your password',
      email: '',
      password: '',
      full_data: [],
    };
  }

  getConnected = () => {

    // We check that the information are valid.
    // If the checkInformation function returns true, then we fetch data
    if(this.checkInformation()) {
      this.fetchData();
    }
    
  }
  

    checkInformation = () => {
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

      else if (this.state.email !== '') {
        if (!EmailValidator.validate(this.state.email)) {
          Alert.alert(
            'Invalid email address',
            'Please enter a valid email address',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
          );
          return console.log('This email address is not valid');
        }
        console.log('Valid email address');
        return true;
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
      // If none of the conditions above is true, then we return true to get to FetchData
      return true;

    }

    fetchData = () => {
      console.log('GET INTO FETCH DATA');
      console.log(this.state.email);
      // We fetch email address from the DB
      fetch(`http://192.168.56.1:4000/api/signin/${this.state.email}/${this.state.password}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.email);

        // Double check that the email is in the DB
        if (responseJson.email === this.state.email) {
          Alert.alert(
            'Hello',
            responseJson.email,
            [
              { text: 'Continue', onPress: () => this.props.navigation.navigate('List') },
            ],
            { cancelable: false },
          );
        } else {
          Alert.alert(
            'Unknown email address',
            'Please refer to the email address you use to create your account',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
          );
          return console.log('Unknown email address');
        }
      })
      .done();
      
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
              onPress={this.getConnected}
              title="Let's go!"
              color="#841584"
              accessibilityLabel="Valider la connexion"
          />
        </View>
      );
    }
}
