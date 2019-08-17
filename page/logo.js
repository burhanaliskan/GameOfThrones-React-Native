import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Image style={{width:200,height:150}}
            source={require('../img/gotlogo.png')}/>
            <Image style={{width:100,height:25}}
            source={require('../img/loginlogo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
});
