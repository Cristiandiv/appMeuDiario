import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, } from "firebase/auth";
import { Firebase } from '../firebase';



export default function Acesso({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');
    const auth = getAuth()
    


    function login(){
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
            
        });
    },[])

    if(user){
        return navigation.navigate('Home');
    }
    else{}

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
                login();
            }}
            >
                <Text style={styles.botaoTexto}>Logar</Text>
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
});