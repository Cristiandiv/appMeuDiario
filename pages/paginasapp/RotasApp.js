import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import CadDiario from './CadDiario';
import AlterarDiario from './AlterarDiario';

const Stack = createStackNavigator();

export default function RotasAcesso (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' 
                component={Home} 
                options={{ headerTintColor: '#9ac234'}}
                />

                <Stack.Screen name='CadDiario' 
                component={CadDiario}
                options={{ headerTintColor: '#9ac234', title: 'Cadastro do dia'}} 
                />

                <Stack.Screen name='AlterarDiario' 
                component={AlterarDiario} 
                options={{ headerTintColor: '#9ac234', title: 'Alterar registros'}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}