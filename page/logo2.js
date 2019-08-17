import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Logo2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Image style={{width:220,height:150,marginRight:-45}}
            source={require('../img/gotlogo2.png')}/>
            <Image style={{width:120,height:25,marginTop:10}}
            source={require('../img/registerlogo.png')}/>
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
