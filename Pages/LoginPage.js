import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native-web'

const LoginPage = () => {
 const [email, setEmail]= useState("");
 const [password,setPassword]=useState("")
 

  return (
    <KeyboardAvoidingView
        style ={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text =>setEmail(text)}
                style={styles.input}
            />

            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={text=> setPassword(password)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={()=> {}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> {}}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>

            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginPage
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    inputContainer:{
        width:'80%'
    },
 
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,

    },

    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'

    },
    
    button:{
        backgroundColor:'blue',
        width:'100%',
        padding:15,
        borderRadius:10,

    },
    buttonText:{


    },

    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'blue',
        borderWidth:2,

    },
    buttonOutlineText:{

    },

    
})