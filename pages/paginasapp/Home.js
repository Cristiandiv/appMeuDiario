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
    <View style={styles.container}>
      <View>
      <Text style={estilo.titulo}>Lista de Dias</Text>
      </View>

      <FlatList
      data={diario}
      >
        
        </FlatList>     
     

      <Text>Meu Diario</Text>
      <Text>Data: 18/03/2024</Text>
      <Text>Palavra: Codar </Text>
      <Text>Consegui resolver :D</Text>
      <StatusBar style="auto" />
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
});
