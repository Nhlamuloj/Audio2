import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import HomePage from './HomePage';




const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (() => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigation.push(HomePage)
        })
    })


    return (
        <KeyboardAvoidingView
            style={{ height: '100%' }}
        >
            <View style={[styles.container, { height: '100%' }]}>
                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.Login}>Login</Text>

                <TextInput
                    placeholder='Email Address'
                    placeholderTextColor={'white'}
                    style={styles.input}
                    onChange={(email) => setEmail(email)}
                />

                <TextInput
                    placeholder='Password'
                    placeholderTextColor={'white'}
                    style={styles.input}
                    onChange={(password) => setPassword(password)}
                />
                <TouchableOpacity
                    onPress={() => navigation.push('Forgot')}
                >
                    <Text style={styles.fpText}>Forgot Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LoginBtn}
                    onPress={login}
                >
                    <Text style={styles.LoginTxt}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signUpTextView}>
                    <Text style={styles.signUpTxt}>Don't have account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.push('RegisterPage')}
                    >
                        <Text style={[styles.signUpTxt, { color: '#B53471' }]}>
                            {'Sign Up'}
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: "#04D4F0"
    },

    welcome: {
        fontSize: 30,
        fontWeight: 900,
        color: '	#000000',
        alignSelf: 'center'
    },


    Login: {
        color: '#fbfcfc',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
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

    fpText: {
        alignSelf: 'flex-end',
        color: '#fbfcfc',
        fontWeight: '600',
        marginTop: 10,
    },

    LoginBtn: {
        backgroundColor: '#4663ac',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20
    },

    LoginTxt: {
        fontSize: 20,
        fontWeight: 500,
        color: '#e8ecf2',
        alignSelf: 'center'
    },

    signUpTextView: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    signUpTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },


})