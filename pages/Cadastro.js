import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


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


  const auth = getAuth();
  

export default function Cadastro({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');
    

    function Cadastro(){

        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }

    useEffect (()=>{
        onAuthStateChanged(auth,function(user){
            setUser(user);
            if(user){
                return navigation.navigate('Acesso');
            }
            else{}
        });
    },[])


    

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastrar-se</Text>

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
                Cadastro();
            }}
            >
                <Text style={styles.botaoTexto}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={()=>{
                navigation.navigate('Acesso');
            }}
            >
                <Text style={styles.botaoTextoVoltar}>Voltar</Text>
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
        backgroundColor: '#dcdcdc',
        color: '#FFFAFA',
        fontSize: 16,
        marginTop: 20,
        borderRadius: 6,
        padding: 4
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

    botaoVoltar: {
        backgroundColor: '#D20103',
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 10
    },


    botaoTexto: {
        fontSize: 20
    },

    botaoTextoVoltar: {
        fontSize: 20,
        color:'#ffffff'
    },
});