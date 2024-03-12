import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Acesso from './Acesso';

const Stack = createStackNavigator();

export default function Rotas (){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Acesso' component={Acesso} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}