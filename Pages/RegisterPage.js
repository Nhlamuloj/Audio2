import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'


export default function RegisterPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (() => {
    createUserWithEmailAndPassword(auth, email, password)
    navigation.push('HomePage');
  })

  return (
    <KeyboardAvoidingView
      style={{height:'100%'}}
    >
      <View style={[styles.container, { height: "10%" }]}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.Login}>Register</Text>
        <TextInput
          placeholder='Name'
          placeholderTextColor={'white'}
          style={styles.input}
        />

        <TextInput
          placeholder='Email'
          placeholderTextColor={'white'}
          style={styles.input}
          onChangeText={(email) => setEmail(email)}

        />

        <TextInput
          placeholder='Password'
          placeholderTextColor={'white'}
          style={styles.input}
          secureTextEntry={true}
          onChange={(password) => setPassword(password)}
        />

        <TouchableOpacity
          style={styles.RegBtn}
          onPress={register}
        >
          <Text style={styles.RegTxt}>Register</Text>
        </TouchableOpacity>

        <View style={styles.signUpText}>
          <Text style={styles.signUpTxt}>Have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.push('LoginPage')}
          >
            <Text style={[styles.signUpTxt,{color:'#B53471'}]}>
              {'Click Here'}
            </Text>

          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#04D4F0"
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#808e9b',
  },

  RegBtn: {
    backgroundColor: '#4663ac',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20
  },

  welcome: {
    fontSize: 30,
    fontWeight: 900,
    color: '#000000',
    alignSelf: 'center'
  },

  Login: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  RegTxt: {
    fontSize: 20,
    fontWeight: 500,
    color: '#e8ecf2',
    alignSelf: 'center'
  },

  signUpText: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signUpTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },

})