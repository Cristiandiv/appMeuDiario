import { createStackNavigator } from '@react-navigation/stack';

import Acesso from './Acesso';
import Home from './paginasapp/Home';
import Cadastro from './Cadastro'


const Stack = createStackNavigator();

export default function RotasAcesso (){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Acesso' component={Acesso} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
        </Stack.Navigator>
    );
}