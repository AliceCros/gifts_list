import React from 'react';
import { TextInput, Text, Button, View, Alert } from 'react-native';
import EmailValidator from 'email-validator';

import Style from '../styles/stylesheet';

export default class InscriptionView extends React.Component {

  static navigationOptions = {
    title: 'Subscribe',
  };

  constructor(props) {
    super(props);
    this.state = {
      email_placeholder: 'Your email address',
      pwd_placeholder: 'Your password',
      pwdconfirm_placeholder: 'Confirm your password',
      email: '',
      password: '',
      passwordconfirmation: '',
    };
  }

    /**
     * Function handlePress checks that every input has been filled in properly
     * => TO BE REFACTORED
     */
    handlePress = () => {
      // Check that the user has entered an email address
      // If not alert pops up
      if (this.state.email === '') {
        Alert.alert(
          'No email has been entered',
          'Please enter an email address',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
        return console.log('You have to enter a valid email address');
      }
      // Check that the user has entered a password
      else if (this.state.password === '') {
        Alert.alert(
          'No password has been entered',
          'Please enter a password',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
        return console.log('You have to enter a password');
      }
      // Check that the password and its confirmation is the same
      else if (this.state.password !== this.state.passwordconfirmation) {
        Alert.alert(
          "Password doesn't match",
          'Please enter a password then confirm it',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
        return console.log("The password doesn't match !");
      }
      // Check that the password is a least 8 characters long
      else if (this.state.password.length < 8) {
        Alert.alert(
          'Invalid password',
          'Password must be minimum 8 characters long',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
        return console.log('Password must be minimum 8 characters long');
      }

      // Check that the email address that has been entered is a valid email address
      // EmailValidator module
      if (this.state.email !== '') {
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
      } else {
        return console.log('Valid email address');
      }
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
            <Text style={Style.h5}>Enter a password</Text>
            <Text style={Style.span}>Minimum 8 characters</Text>
            <TextInput
                style={Style.input}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                placeholder={this.state.pwd_placeholder}
                secureTextEntry
              />
            <Text style={Style.h5}>Confirm your password</Text>
            <TextInput
                style={Style.input}
                onChangeText={passwordconfirmation => this.setState({ passwordconfirmation })}
                value={this.state.passwordconfirmation}
                placeholder={this.state.pwdconfirm_placeholder}
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
