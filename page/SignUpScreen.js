import React from 'react';
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Button,Label} from 'native-base'
import Logo2 from './logo2';
import firebase from 'firebase';

export default class SignUpScreen extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state=({
          email:'',
          password:''
        })
      }
      
      signUp = (email,password) => {

        if(this.state.email == "" || this.state.password== ""){
          alert("Please do not leave your email or password parts empty !!!")
          return;
        }
        if(this.state.password.length<6){
            alert("Please enter at least 6 characters!!!")
            return;
          }
          
           firebase.auth().createUserWithEmailAndPassword(email,password).then(() => {
            alert("Registration successfull")
            this.props.navigation.navigate('Login')
            } )
            
          .catch(() => {
            alert("This email address is already registered !!!")
          })
        }

        Login = () => {
            this.props.navigation.navigate('Login')
        }


  render() {
    return (
        <Container style={styles.container}>
    <Form style={{marginTop:50}}>
    <Logo2/>
      <Item floatingLabel style={{marginTop:90}}>
        <Label>E-mail</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
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
    
       <Button style={{marginTop:25,backgroundColor:"#FFD700"}}
          full
          rounded
          onPress = {() =>this.signUp(this.state.email,this.state.password)}
       >
         <Text style={{color:'white'}}>Signup</Text>
        </Button> 

        <View style={styles.signUpText}>
            <Text style={styles.signup}>Already hava an account yet?</Text>
            <TouchableOpacity
            onPress={() => this.Login()}
            >
                <Text style={styles.signupButton}> Login</Text>
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
  