import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import { Sidebar } from 'lucide-react-native';


const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initionRouteName = "Home">
                <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
        </NavigationContainer>
    );
}