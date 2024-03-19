import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Meu Diario</Text>
      <Text>Data: 11/03/2024</Text>
      <Text>Palavra: Codar </Text>
      <Text>Resolvendo as conexões com o Firebase, alguem me ajude!</Text>

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
