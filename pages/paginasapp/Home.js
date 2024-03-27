import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({navigation}) {

  const [diario, setDiario] = useState([]);

  function deleteDiario(id){

    Firebase.collection("diario").doc(id).delete();

    Alert.alert("O Diario foi deletado.");
  }

  useEffect(()=>{
    Firebase.collection("diario").onSnapshot((query)=>{
      const lista=[];
      query.forEach((doc) => {
        lista.push({...doc.data(),id: doc.id});
      });      
      setDiario(lista);
    });
  },[]);

  return (
    <View style={estilo.container}>
      <View>
      <Text style={estilo.titulo}>Lista de Dias</Text>
      </View>

      <FlatList
      data={diario}
      renderItem={({item})=>{
        return(
         <View style={estilo.musicas}>

          <TouchableOpacity onPress={()=>navigation.navigate("AlterarDiario",{
            id: item.id,
            banda: item.artistabanda,
            genero: item.genero,
            musica: item.musica
          })}>
            <View style={estilos.itens}>
              <Text style={estilo.titulobanda}>Artista/Banda: <Text style={estilo.textobanda}>{item.artistabanda}
              </Text></Text>
              <Text style={estilo.titulobanda}>Genêro: <Text style={estilo.textobanda}>{item.genero}
              </Text></Text>
              <Text style={estilo.titulobanda}>Musica: <Text style={estilo.textobanda}>{item.musica}
              </Text></Text>
            </View>
          </TouchableOpacity>

            <View style={estilo.botaodeletar}>
              <TouchableOpacity onPress={()=>{deleteMusica(item.id)}}>
                <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
              </TouchableOpacity>
            </View>
         </View> 
        );
      }}
      >

      </FlatList>    

      <TouchableOpacity style={estilo.addbutton} onPress={()=>navigation.navigate("CadMusica")}>
        <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />  
      </TouchableOpacity>  
     
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo:{
    marginTop: 50,
    fontSize: 30
  },
  itens:{
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10
  },
  titulobanda:{
    fontSize: 13,
    color: '#fff'
  },
  textobanda:{
    fontSize: 15,
    fontWeight: "bold"
  },
  musicas:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10, 
    backgroundColor: '#0000CD',
    borderRadius: 10
  },
  botaodeletar:{
    textAlignVertical: 'center',
    marginVertical: 10
  },
  addbutton:{
    backgroundColor: '#ffffff',
    borderRadius: 50,
    position: 'absolute',
    left: 20,
    bottom: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
