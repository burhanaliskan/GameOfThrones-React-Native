import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import LoginScreen from './page/LoginScreen';
import SignUpScreen from './page/SignUpScreen';
import MainPageScreen from './page/MainPageScreen';
import CharacterScreen from './character/character';

import * as firebase from 'firebase';
import {firebaseConf} from './config';
firebase.initializeApp(firebaseConf);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
Login :LoginScreen,
SignUp:SignUpScreen,
MainPage:MainPageScreen,
Character:CharacterScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10,
  },
});
