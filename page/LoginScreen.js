import React from 'react';
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Button,Label} from 'native-base'
import Logo from './logo';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props)
        
        this.state=({
          email:'',
          password:''
        })
      }

      Login = (email,password) => {

        if(this.state.email == "" || this.state.password== ""){
          alert("Please do not leave your email or password parts empty !!!")
          return;
        }
        if(this.state.password.length<6){
            alert("Please enter at least 6 characters!!!")
            return;
          }
          
           firebase.auth().signInWithEmailAndPassword(email,password).then(() => {
             alert("Login successful")
            this.props.navigation.navigate('MainPage')
            } )
            
          .catch(() => {
            alert("Please enter your email or password correctly !!!")
          })
        }

        Sign = () => {
            this.props.navigation.navigate('SignUp')
        }

  render() {
    return (
        <Container style={styles.container}>
        <Form style={{marginTop:50}}>
        <Logo/>
          <Item floatingLabel style={{marginTop:90}}>
            <Label>E-mail</Label>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}
              />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input 
             secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
              />
          </Item>
        
           <Button style={{marginTop:25}}
              full
              rounded
              success
              onPress = {() =>this.Login(this.state.email,this.state.password)}
           >
             <Text style={{color:'white'}}>Login</Text>
            </Button> 

            <View style={styles.signUpText}>
                <Text style={styles.signup}>Don't hava an account yet?</Text>
                <TouchableOpacity
                onPress={() => this.Sign()}
                >
                    <Text style={styles.signupButton}> Signup</Text>
                </TouchableOpacity>
                </View>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10,
  },
  signUpText:{
      alignItems:'flex-end',
      justifyContent:'center',
      marginTop:75,
      flexDirection:'row'
  },
  signup:{
      fontSize:16
  },
  signupButton:{
      fontSize:16,
      fontWeight:'bold',
  }
});
