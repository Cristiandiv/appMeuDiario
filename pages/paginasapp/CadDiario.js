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
    const [titulo, setTitulo] = useState(null);
    const [texto, setTexto] = useState(null);  
    const [data, setData] = useState(null);
    const [local, setLocal] = useState(null);    

    function addDiario(){
        Firebase.collection('diario').add({
            titulo: titulo,
            texto: texto,
            data: data,
            local: local, 
        });
        setTitulo({titulo:''})
        setTexto({texto: ''})
        setData({data: ''})
        setLocal({local: ''})
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
            onChangeText={setTitulo} value={titulo}/>
            <TextInput style={estilo.input} placeholder='Digite o Genero da musica' onChangeText={setTexto}
            value={texto}/>
            <TextInput style={estilo.input} placeholder='Digite o Nome da musica' onChangeText={setData}
            value={data}/>
            <TextInput style={estilo.input} placeholder='Digite o Nome da musica' onChangeText={setLocal}
            value={local}/>
            <TouchableOpacity
            style={estilo.btnenviar}
            onPress={()=>{
                addDiario();
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