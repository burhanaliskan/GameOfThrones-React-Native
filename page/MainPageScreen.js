import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base'

import flatlistdata from '../data/flatlistdata';
import firebase from 'firebase';

export default class MainPageScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  Characters = () => {
    this.props.navigation.navigate('Character' ,{id: 583})
  }

  SignOut = () => {
    firebase.auth().signOut().then(() => {
      alert("You have successfully logged out")
      this.props.navigation.navigate('Login')
    })
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <FlatList
          data={flatlistdata}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Character',{id: item.key},{img: item.imgsource})}>
                  <Image source={item.imgsource}
                    style={{ width: 150, height: 150, borderWidth: 1, }}>
                  </Image>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginTop: 1 }}>{item.name}</Text>

              </View>
            );
          }}
          numColumns={2}
        >
        </FlatList>
        <View>
        <Button
              full
              rounded
              danger
              onPress = {() =>this.SignOut()}
           >
             <Text style={{color:'white'}}>Sign Out</Text>
            </Button> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  toolbar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

