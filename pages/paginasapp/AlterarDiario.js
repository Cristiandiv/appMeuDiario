import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Firebase from '../firebase';

export default function AlterarDiario({navigation, route}){
const id = route.params.id;

const [banda, setBanda] = useState(route.params.banda);
const [genero, setGenero] = useState(route.params.genero);
const [musica, setMusica] = useState(route.params.musica);

function alterarDiario(id,banda,genero,musica){
    Firebase.collection("musica").doc(id).update({
        artistabanda: banda,
        genero: genero,
        musica: musica,
    })
    Alert.alert("Aviso","Musica alterada com sucesso.")
    navigation.navigate("Home")
}

return (
    <View style={estilo.container}>
        <View>
            <Text style={estilo.titulo}> Alterar dados da Musica</Text>
        </View>
        <View>
            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite a Banda/Artista"
            onChangeText={setBanda} value={banda}/>
            <TextInput style={estilo.input} placeholder='Digite o Genero da musica' onChangeText={setGenero}
            value={genero}/>
            <TextInput style={estilo.input} placeholder='Digite o Nome da musica' onChangeText={setMusica}
            value={musica}/>
            <TouchableOpacity
            onPress={()=>{
                alterarMusica(id,banda,genero,musica);
            }}>
                <Text style={estilo.btntxtenviar}>Alterar</Text>
            </TouchableOpacity>
        </View>
    </View>
);
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