import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Alert} from 'react-native';
import Firebase from '../firebase';

export default function CadDiario({navigation}){
    const [musica, setMusica] = useState(null);
    const [genero, setGenero] = useState(null);
    const [banda, setBanda] = useState(null);    

    function addMusica(){
        Firebase.collection('musica').add({
            artistabanda: banda,
            genero: genero,
            musica: musica,
        });
        setBanda({banda:''})
        setGenero({genero: ''})
        setMusica({musica: ''})
        Alert.alert("Cadastro","Musica cadastrada com sucesso")
        navigation.navigate("Home")
    }

    return (
        <View style={estilo.container}>
        <View>
            <Text style={estilo.titulo}> Cadastre Suas {'\n'} Musicas </Text>
        </View>
        <View>
            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite a Banda/Artista"
            onChangeText={setBanda} value={banda}/>
            <TextInput style={estilo.input} placeholder='Digite o Genero da musica' onChangeText={setGenero}
            value={genero}/>
            <TextInput style={estilo.input} placeholder='Digite o Nome da musica' onChangeText={setMusica}
            value={musica}/>
            <TouchableOpacity
            style={estilo.btnenviar}
            onPress={()=>{
                addMusica();
            }}>
                <Text style={estilo.btntxtenviar}>Enviar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )

}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input:{
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#9ac234',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10
    },
    btnenviar:{
        martinTop: 20
    },
    btntxtenviar:{
        fontSize: 25
    },
    titulo:{
      marginVertical: 40,
      fontSize: 25,
      textAlign: 'center'
    },
  });