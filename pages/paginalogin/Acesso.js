import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {ReactNativeAsyncStorage} from '@react-native-async-storage/async-storage';

//configuracao do firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAbCspt3HsP6PyR5jIegG2S5Y_fzYAYVoM",
    authDomain: "diariobd-ae542.firebaseapp.com",
    projectId: "diariobd-ae542",
    storageBucket: "diariobd-ae542.appspot.com",
    messagingSenderId: "859882068766",
    appId: "1:859882068766:web:4cb61cd0d81479f2abc70f"
  };
  

  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  

  //instalar o @react-native-async-storage/async-storage
export default function Acesso({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');
    

    function Login(){
        signInWithEmailAndPassword(auth, email, senha).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage);
            }
        )
        
    }

    useEffect (()=>{
        onAuthStateChanged(auth,function(user){
            setUser(user);
            if(user){
                return navigation.navigate('Home');
            }
            else{}
        });
    },[])

    

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Acesso ao Diario</Text>

            <TextInput 
            style={styles.textoInput}
            placeholder="Digite o email"
            onChangeText={(email)=>setEmail(email)}
            value={email}
            />

            <TextInput 
            style={styles.textoInput}
            placeholder="Digite a senha"
            onChangeText={(senha)=>setSenha(senha)}
            value={senha}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={()=>{
                Login();
            }}
            >
                <Text style={styles.botaoTexto}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botaoCadas}
            onPress={()=>{
                navigation.navigate('Cadastro');
            }}
            >
                <Text style={styles.botaoTextoCadas}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textoInput:{
        width: 200,
        backgroundColor: '#0000CD',
        color: '#FFFAFA',
        fontSize: 16,
        marginTop: 20,
        borderRadius: 6
    },

    titulo:{
        fontSize: 35,
    },

    botao: {
        backgroundColor: '#dcdcdc',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 10
    },

    botaoTexto: {
        fontSize: 20
    },

    botaoCadas: {
        backgroundColor: '#01A1D3',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },

    botaoTextoCadas: {
        fontSize: 20,
        color: '#ffffff'
    },
});